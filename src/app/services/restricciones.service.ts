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
     { id:1, descripcion:'Ver'},
     { id:2, descripcion:'Escuchar'},
     { id:3, descripcion:'Estar de pie'},
     { id:4, descripcion:'Moverme con facilidad'},
     { id:5, descripcion:'Moverme'},
     { id:6, descripcion:'Otros'}
    ]
  }

}
