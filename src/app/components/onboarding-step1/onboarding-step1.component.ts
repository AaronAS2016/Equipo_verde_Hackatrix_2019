import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { RestriccionesService } from 'src/app/services/restricciones.service';
import { RestriccionModel } from '../models/restriccion.model';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-onboarding-step1',
  templateUrl: './onboarding-step1.component.html',
  styleUrls: ['./onboarding-step1.component.css']
})
export class OnboardingStep1Component implements OnInit {

  constructor(
    private restriccionesService:RestriccionesService,
  ) { }


  @Output() seleccion =  new EventEmitter<Array<RestriccionModel>>();
  restricciones: Array<RestriccionModel>;
  checklistSelection = new Array<RestriccionModel>();
  ngOnInit() {
    this.restricciones = this.restriccionesService.GetRestricciones();
  }

  selecciono(restriccion){
    var index = this.checklistSelection.findIndex(g => g.id == restriccion.id)
    if(index > -1) {
      this.checklistSelection.splice(index,1);
    }
    else{
      this.checklistSelection.push(restriccion);
    }
    this.seleccion.emit(this.checklistSelection)
  }
}
