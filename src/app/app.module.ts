import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home.component';
import { OnboardingHeaderComponent } from './components/onboarding-header/onboarding-header.component';
import { OnboardingContainerComponent } from './components/onboarding-container/onboarding-container.component';
import { OnboardingStep1Component } from './components/onboarding-step1/onboarding-step1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuscadorComponent } from './components/buscador/buscador.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { OnboardingStep2Component } from './components/onboarding-step2/onboarding-step2.component';
import { RecomendacionComponent } from './components/recomendacion/recomendacion.component';
import { RecomendacionesComponent } from './components/recomendaciones/recomendaciones.component';
import { DetalleRecomendacionComponent } from './views/detalle-recomendacion/detalle-recomendacion.component';
import { OnboardingStep3Component } from './components/onboarding-step3/onboarding-step3.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnboardingHeaderComponent,
    OnboardingContainerComponent,
    OnboardingStep1Component,
    OnboardingComponent,
    OnboardingStep1Component,
    BuscadorComponent,
    OnboardingStep2Component,
    RecomendacionComponent,
    RecomendacionesComponent,
    DetalleRecomendacionComponent,
    OnboardingStep3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
