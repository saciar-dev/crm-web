import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.css']
})
export class EntidadesComponent implements OnInit {

  entidades: any = [{
    name: 'Servicios',
    imagen: "../../../assets/consola.jpg",
    descripcion: "ABM de servicios. Altas, bajas y modificaciones de los servicios en la aplicacion",
    routeTo:"/superfamilias"
  },{
    name: 'Clientes',
    imagen: "../../../assets/clientes.jpg",
    descripcion: "ABM de clientes. Altas, bajas y modificaciones de los clientes en la aplicacion",
    routeTo:"/clientes"
  },{
    name: 'Lugares',
    imagen: "../../../assets/lugares.jpg",
    descripcion: "ABM de lugares de evento. Altas, bajas y modificaciones de los lugares en la aplicacion",
    routeTo:"/lugares"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
