import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  perfil = {}

  pushSelection(key, selection){
    console.log(key,selection);
    Object.assign({}, this.perfil, this.perfil[key] = selection);
  }

  getPerfil(){
      return this.perfil;
  }
}
