import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-onboarding-container',
  templateUrl: './onboarding-container.component.html',
  styleUrls: ['./onboarding-container.component.css']
})
export class OnboardingContainerComponent implements OnInit {

  @Input() title: string;
  @Input() stepStart: number;
  @Input() stepEnd: number;

  constructor() { }

  ngOnInit() {
  }

}
