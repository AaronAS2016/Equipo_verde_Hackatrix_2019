import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingStep1Component } from './components/onboarding-step1/onboarding-step1.component';


const routes: Routes = [
  {path : '',  component : OnboardingStep1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
