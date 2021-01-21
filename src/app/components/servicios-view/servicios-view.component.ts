import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { FamiliasService } from 'src/app/services/familias.service';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-servicios-view',
  templateUrl: './servicios-view.component.html',
  styleUrls: ['./servicios-view.component.css']
})
export class ServiciosViewComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;
  isDtInitialized:boolean = false;

  servicios: any = [];
  familiaId ='';
  familiaNombre: string | undefined='';

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>(); 

  constructor(private serviciosService: ServiciosService, private familiaService: FamiliasService, private activatedRoute: ActivatedRoute, private router: Router) { }

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
        this.familiaId = params.id;
      }
    )

    this.familiaService.getFamiliaById(this.familiaId).subscribe(
      res => {        
        console.log(res.fs_descripcion);
        this.familiaNombre = "Servicios de "+res.fs_descripcion;
      },
      err => console.log(err)
    );
    
    this.getServicios();
    
  }

  getServicios(): void {
    this.serviciosService.getServicioPorFamilia(this.familiaId).subscribe(
      res => {
        this.servicios = res;
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

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
