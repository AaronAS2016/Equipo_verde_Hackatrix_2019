import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  actualStep = 1;

  MAX_STEAPS = 3;

  title = ["NO PUEDO", "ME GUSTA" ,"ME MUEVO EN"]

  constructor() { }

  ngOnInit() {
  }

  handleClickContine()  {
    this.actualStep++;
    if(this.actualStep > this.MAX_STEAPS){

    }
  }

}
