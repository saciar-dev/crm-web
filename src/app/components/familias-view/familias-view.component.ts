import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { FamiliasService } from '../../services/familias.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { familia } from '../../model/familia-model';
import { DataTableDirective } from 'angular-datatables';
import { SuperFamiliasService } from 'src/app/services/super-familias.service';

@Component({
  selector: 'app-familias-view',
  templateUrl: './familias-view.component.html',
  styleUrls: ['./familias-view.component.css']
})
export class FamiliasViewComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  isDtInitialized:boolean = false;

  familias: any = [];
  superFamiliaId ='';
  superFamiliaNombre: string | undefined='';

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private superFamiliaService: SuperFamiliasService, private familiaService: FamiliasService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.22/i18n/Spanish.json"
      }      
    }

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.superFamiliaId = params.id;
      }
    )

    this.superFamiliaService.getSuperFamiliaPorId(this.superFamiliaId).subscribe(
      res => {        
        console.log(res.descripcion);
        this.superFamiliaNombre = "Familias de "+res.descripcion;
      },
      err => console.log(err)
    );
    
    this.getFamilias();
    
  }

  getFamilias(): void {
    this.familiaService.getFamiliasBySuper(this.superFamiliaId).subscribe(
      res => {
        this.familias = res;
        if (this.isDtInitialized) {
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.dtTrigger.next();
          });
        } else {
          this.isDtInitialized = true
          this.dtTrigger.next();
        }
      },
      err => console.log
    );
  }

  alertaEditar(codFamilia: any, nombreAdejar: any) {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2']
    }).queue([
      {
        title: 'Nombre',
        text: 'Ingrese el nuevo nombre para la familia'
      },
      {
        title: 'Descripcion',
        text: 'Ingrese una breve descripcion para la familia',
        input: 'textarea'
      }
    ]).then((resultado:any) => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success mx-1',        
          cancelButton: 'btn btn-primary mx-1'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Esta seguro de editar la familia '+nombreAdejar+'?',
        text: "No puede revertir esta desicion!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.editarFamilia(codFamilia,resultado.value[0]);
          swalWithBootstrapButtons.fire(
            'Editado!',
            'La familia fue editada correctamente.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'La familia no se ha editado',
            'error'
          )
        }
      })
    })
  }

  alertaBorrar(codFamilia: any, nombre: any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {        
        confirmButton: 'btn btn-success mx-1',        
        cancelButton: 'btn btn-primary mx-1'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Esta seguro de borrar?',
      text: "No puede revertir esta desicion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.borrarFamilia(codFamilia, nombre);
        swalWithBootstrapButtons.fire(
          'Borrado!',
          'La familia fue borrada.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'La familia aun esta disponible',
          'error'
        )
      }
    })
  }

  borrarFamilia(codFamilia: any, nombre: any){
    const familiaActual: familia = {fs_descripcion: nombre , activo:'N'} 
          this.familiaService.updateFamilia(codFamilia, familiaActual)
            .subscribe (res =>{
              this.getFamilias();
            },
            err => console.log(err))
  }

  editarFamilia(codFamilia: any, nombre: any){
    const familiaActual: familia = {fs_descripcion: nombre , activo:'S'} 
          this.familiaService.updateFamilia(codFamilia, familiaActual)
            .subscribe (res =>{
              this.getFamilias();
            },
            err => console.log(err))
  }

  verServicios(codFamilia: any){
    this.router.navigate(["/servicios/"+codFamilia]);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
