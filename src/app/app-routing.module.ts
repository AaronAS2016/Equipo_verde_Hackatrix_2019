import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home.component';
import { DetalleRecomendacionComponent } from './views/detalle-recomendacion/detalle-recomendacion.component';


const routes: Routes = [
  {path : '',  component : HomeComponent},
<<<<<<< HEAD
  {path : 'onboarding',  component : OnboardingComponent}
=======
  { path : 'detalle-recomendacion/:id',  component : DetalleRecomendacionComponent },
  {path : '',  component : OnboardingComponent}
>>>>>>> 25710a7a6e8148e255d989a45bf8a1ea93af3b7e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
