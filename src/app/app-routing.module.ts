import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home.component';
import { DetalleRecomendacionComponent } from './views/detalle-recomendacion/detalle-recomendacion.component';


const routes: Routes = [
  {path : '',  component : HomeComponent},
  {path : 'onboarding',  component : OnboardingComponent},
  { path : 'detalle-recomendacion/:id',  component : DetalleRecomendacionComponent },
  {path : '',  component : OnboardingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
