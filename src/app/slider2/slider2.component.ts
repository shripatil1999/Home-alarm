import { Component, OnInit } from '@angular/core';
declare let Swiper: any;

@Component({
  selector: 'app-slider2',
  templateUrl: './slider2.component.html',
  styleUrls: ['./slider2.component.scss']
})
export class Slider2Component implements OnInit {

  constructor() { this.initSwiper(); }

  ngOnInit(): void {
  }


ngAfterViewInit(){
  this.initSwiper();
}
  initSwiper(){
    const swiper2 = new Swiper('.swiper-2', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1,
      spaceBetween: 1,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

}