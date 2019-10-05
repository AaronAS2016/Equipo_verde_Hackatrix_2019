import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingComponent } from './dialogs/onboarding/onboarding.component';
import { OnboardingHeaderComponent } from './components/onboarding-header/onboarding-header.component';
import { OnboardingContainerComponent } from './components/onboarding-container/onboarding-container.component';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    OnboardingHeaderComponent,
    OnboardingContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
