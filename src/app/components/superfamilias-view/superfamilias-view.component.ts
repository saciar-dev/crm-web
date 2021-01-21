import { Component, OnInit } from '@angular/core';
import { SuperFamiliasService } from '../../services/super-familias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superfamilias-view',
  templateUrl: './superfamilias-view.component.html',
  styleUrls: ['./superfamilias-view.component.css']
})
export class SuperfamiliasViewComponent implements OnInit {

  superfamilias: any= []; 

  constructor(private superFamiliaService: SuperFamiliasService, private router: Router) { }

  ngOnInit(): void {
    this.superFamiliaService.getSuperFamilias().subscribe(
      res => {
        this.superfamilias = res;
      },
      err => console.log
    );
  }

  verFamilias(codSuper: any){
    this.router.navigate(["/familias/"+codSuper]);
  }

  borrarFamilias(codSuper: any){
    //this.router.navigate(["/familias/"+codSuper]);

    for(var i=0; i<this.superfamilias.length; i++){
      if(this.superfamilias[i].idt_super_familia === codSuper){
        this.superfamilias.splice(i,1);
        return;
      }
    }
    
  }

}
