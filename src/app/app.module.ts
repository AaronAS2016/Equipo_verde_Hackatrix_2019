import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingHeaderComponent } from './components/onboarding-header/onboarding-header.component';
import { OnboardingContainerComponent } from './components/onboarding-container/onboarding-container.component';
import { OnboardingStep1Component } from './components/onboarding-step1/onboarding-step1.component';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingHeaderComponent,
    OnboardingContainerComponent,
    OnboardingStep1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
