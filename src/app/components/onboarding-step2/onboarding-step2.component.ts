import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GustosService } from 'src/app/services/gustos.service';
import { GustoModel } from '../models/gusto.model';

@Component({
  selector: 'app-onboarding-step2',
  templateUrl: './onboarding-step2.component.html',
  styleUrls: ['./onboarding-step2.component.css']
})
export class OnboardingStep2Component implements OnInit {

  constructor(
    private gustosService:GustosService
  ) { }

  gustos:Array<GustoModel> ;
  @Output() seleccion = new EventEmitter<Array<GustoModel>>();
  seleccionados:Array<GustoModel> = new Array<GustoModel>();
  ngOnInit() {
    this.gustos = this.gustosService.getGustos();
  }

  seleccionar(marcado:GustoModel){
    var index = this.seleccionados.findIndex(g => g.id == marcado.id)
    if(index > -1) {
      this.seleccionados.splice(index,1);
    }
    else{
      this.seleccionados.push(marcado);
    }
  }

  estaSeleccionado(gusto:GustoModel):boolean{
    return this.seleccionados.includes(gusto);
  }

}
