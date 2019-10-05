import { Injectable } from '@angular/core';
import { TransporteModel } from '../components/models/tranporte.model';

@Injectable({
  providedIn: 'root'
})
export class TransporteService {

  constructor() { }

  transportes:Array<TransporteModel> = [
    {id:1, descripcion:'Auto'},
    {id:2, descripcion:'Transporte publico'},
    {id:3, descripcion:'A pie'}
  ]

  public GetTransportes():Array<TransporteModel>{
    return this.transportes;
  }
  
}
