import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarslistComponent } from './components/carslist/carslist.component';
import { CarformComponent } from './carform/carform.component';
import { CareditComponent } from './components/caredit/caredit.component';

const routes: Routes = [
  { path: '', redirectTo: 'carslist', pathMatch: 'full'},
  { path: 'carslist', component: CarslistComponent },
  { path: 'add', component: CarformComponent},
  { path: 'edit/:id', component: CareditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
