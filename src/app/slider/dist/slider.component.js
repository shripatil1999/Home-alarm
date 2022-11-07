"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SliderComponent = void 0;
var core_1 = require("@angular/core");
var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.initSwiper();
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent.prototype.onSwiper = function (swiper) {
        swiper.update();
    };
    SliderComponent.prototype.ngAfterViewInit = function () {
        this.initSwiper();
    };
    SliderComponent.prototype.initSwiper = function () {
        var swiper1 = new Swiper('.swiper-1', {
            direction: 'horizontal',
            loop: false,
            observer: true,
            observeParents: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination'
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 10
                }
            }
        });
    };
    SliderComponent = __decorate([
        core_1.Component({
            selector: 'app-slider',
            templateUrl: './slider.component.html',
            styleUrls: ['./slider.component.scss']
        })
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
