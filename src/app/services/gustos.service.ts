import { Injectable } from '@angular/core';
import { GustoModel } from '../components/models/gusto.model';

@Injectable({
  providedIn: 'root'
})
export class GustosService {

  constructor() { }

  gustos: Array<GustoModel> = [
    {id:1,descripcion:'Musica',imagen:'/assets/artecallejero.jpg'},
    {id:2,descripcion:'Gastronomia',imagen:'/assets/gastronomia.jpg'},
    {id:3,descripcion:'Historia',imagen:'/assets/historia.jpg'},
    {id:4,descripcion:'Arte',imagen:'/assets/arte.jpg'},
    {id:5,descripcion:'Cultura General',imagen:'/assets/artecallejero.jpg'},
    {id:6,descripcion:'Bares',imagen:'/assets/gastronomia.jpg'},
    {id:7,descripcion:'Deportes',imagen:'/assets/historia.jpg'},
    {id:8,descripcion:'Aventura',imagen:'/assets/arte.jpg'},
    {id:9,descripcion:'Moda',imagen:'/assets/gastronomia.jpg'},
    {id:10,descripcion:'Geek',imagen:'/assets/artecallejero.jpg'},
    {id:11,descripcion:'Arte callejero',imagen:'/assets/gastronomia.jpg'},
    {id:12,descripcion:'Audiovisual',imagen:'/assets/artecallejero.jpg'},
    {id:13,descripcion:'Juegos',imagen:'/assets/artecallejero.jpg'},
    {id:14,descripcion:'Teatro',imagen:'/assets/gastronomia.jpg'}
  ]
  public getGustos():Array<GustoModel>{
    return this.gustos;
  }
}
