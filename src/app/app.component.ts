import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, slider, stepper } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // fader,
    // stepper
    slider, 
  ]
})
export class AppComponent {
  title = 'LVR Portofolio';

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

