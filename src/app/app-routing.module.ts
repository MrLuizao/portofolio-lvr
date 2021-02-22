import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortraitComponent } from './pages/portrait/portrait.component';

const routes: Routes = [
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
  { 
    path: '', 
    component: PortraitComponent, 
  },
  { 
    path: 'home', 
    component: PortraitComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
