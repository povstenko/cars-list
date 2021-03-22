import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MaintenenceComponent } from './components/maintenence/maintenence.component';
import { TopComponent } from './components/top/top.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'maintenance', component: MaintenenceComponent},
  {path: 'top', component: TopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
