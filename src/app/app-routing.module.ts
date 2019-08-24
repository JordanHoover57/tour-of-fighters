import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FightersComponent } from './fighters/fighters.component'

const routes: Routes = [
  { path: 'fighters', component: FightersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
