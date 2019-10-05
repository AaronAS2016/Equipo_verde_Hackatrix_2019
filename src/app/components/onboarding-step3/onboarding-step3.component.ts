import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { RestriccionesService } from 'src/app/services/restricciones.service';
import { RestriccionModel } from '../models/restriccion.model';
import {SelectionModel} from '@angular/cdk/collections';
import { TransporteService } from 'src/app/services/transporte.service';
import { TransporteModel } from '../models/tranporte.model';

@Component({
  selector: 'app-onboarding-step3',
  templateUrl: './onboarding-step3.component.html',
  styleUrls: ['./onboarding-step3.component.css']
})
export class OnboardingStep3Component implements OnInit {

  constructor(
    private transporteService:TransporteService,
  ) { }


  @Output() seleccion =  new EventEmitter<Array<TransporteModel>>();
  transportes: Array<TransporteModel>;
  checklistSelection = new SelectionModel<TransporteModel>();
  ngOnInit() {
    this.transportes = this.transporteService.GetTransportes();
  }


  selecciono(){
    this.seleccion.emit(this.checklistSelection.selected);
  }

}
