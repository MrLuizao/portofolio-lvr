import { Component, OnInit } from '@angular/core';
import { TweenMax } from 'gsap';
import * as ScrollMagic from 'scrollmagic';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss']
})

export class PortraitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.scrollinVideo();
    this.showMenuInScroll();
  }

  scrollinVideo(){

    const intro = document.querySelector('.intro')    
    const video = intro?.querySelector('video') 
    if (!video) return;
    const text = intro?.querySelector('h1')
    if (!text) return;

    const section = document.querySelector('section')
    const end = section?.querySelector('h1')

    const controller = new ScrollMagic.Controller();

    let scene = new ScrollMagic.Scene({
      duration: 3000,
      triggerElement: intro,
      triggerHook: 0
    })
    .setPin(intro)
    .addTo(controller)


    const textAnim = TweenMax.fromTo(text, 3, {opacity: 0}, {opacity:1})

    let scene2 =  new ScrollMagic.Scene({
      duration: 3000,
      triggerElement: intro,
      triggerHook: 0
    })
    // .setPin(intro)
    .addTo(controller)

    let accelamount = 0.05;
    let scrollpos = 0;
    let delay = 0;

    scene.on("update", (evt: any) =>{
      scrollpos = evt.scrollPos / 1000;
    });

    setInterval( () => {
      // delay += (scrollpos - delay) * accelamount;
      delay += (scrollpos - delay);
      video.currentTime = delay;
      
    }, 150)  
    
  }
  
  showMenuInScroll(){

  }

}
