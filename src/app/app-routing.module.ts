import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FightersComponent } from './fighters/fighters.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { FighterDetailComponent } from './fighter-detail/fighter-detail.component'

const routes: Routes = [
  { path: 'fighters', component: FightersComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: FighterDetailComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
