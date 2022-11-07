"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Slider2Component = void 0;
var core_1 = require("@angular/core");
var Slider2Component = /** @class */ (function () {
    function Slider2Component() {
        this.initSwiper();
    }
    Slider2Component.prototype.ngOnInit = function () {
    };
    Slider2Component.prototype.ngAfterViewInit = function () {
        this.initSwiper();
    };
    Slider2Component.prototype.initSwiper = function () {
        var swiper2 = new Swiper('.swiper-2', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            spaceBetween: 1,
            pagination: {
                el: '.swiper-pagination'
            }
        });
    };
    Slider2Component = __decorate([
        core_1.Component({
            selector: 'app-slider2',
            templateUrl: './slider2.component.html',
            styleUrls: ['./slider2.component.scss']
        })
    ], Slider2Component);
    return Slider2Component;
}());
exports.Slider2Component = Slider2Component;
