import { Injectable } from '@angular/core';
import { RestriccionModel } from '../components/models/restriccion.model';

@Injectable({
  providedIn: 'root'
})
export class RestriccionesService {
  constructor() { 

  }



  public GetRestricciones():Array<RestriccionModel>{
    return [
     { id:1, descripcion:'Ver', icono: ''},
     { id:2, descripcion:'Escuchar', icono: ''},
     { id:3, descripcion:'Estar de pie', icono: ''},
     { id:4, descripcion:'Moverme con facilidad', icono: ''},
     { id:5, descripcion:'Moverme', icono: ''},
     { id:6, descripcion:'Otros', icono: ''}
    ]
  }

}
