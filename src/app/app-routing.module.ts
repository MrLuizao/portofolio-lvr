import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortraitComponent } from './pages/portrait/portrait.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  // { path: '**', pathMatch: 'full', redirectTo: 'home'},
  { 
    path: '', 
    component: PortraitComponent, 
  },
  { 
    path: 'home', 
    component: PortraitComponent, 
  },
  { 
    path: 'about', 
    component: AboutComponent, 
    data: { animation: 'isAbout'}
  },
  { 
    path: 'projects', 
    component: ProjectsComponent, 
    data: { animation: 'isProjects'}
  },
  { 
    path: 'contact', 
    component: ContactComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
