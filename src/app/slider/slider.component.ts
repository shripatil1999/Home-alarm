import { Component, OnInit } from '@angular/core';
declare let Swiper: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { this.initSwiper(); }

  ngOnInit(): void {
    
  }

  onSwiper(swiper) {
    swiper.update();
  }
ngAfterViewInit(){
  this.initSwiper();
  
}
  initSwiper(){
    const swiper1 = new Swiper('.swiper-1', {
      direction: 'horizontal',
      loop: false,
      observer: true,
      observeParents: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });
  }
}