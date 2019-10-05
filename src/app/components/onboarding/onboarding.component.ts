import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('200ms', style({transform: 'translateX(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class OnboardingComponent implements OnInit {

  actualStep = 1;

  MAX_STEAPS = 3;

  title = ["NO PUEDO", "ME GUSTA" ,"ME MUEVO EN"]

  constructor(private router: Router, private perfilService: PerfilService) { }

  ngOnInit() {
  }

  handleClickContine()  {
    this.actualStep++;
    if(this.actualStep > this.MAX_STEAPS){
      this.router.navigate(["/"]);
    }
  }

  pushSelections(e){
    this.perfilService.pushSelection(this.actualStep,e)
  }

}
