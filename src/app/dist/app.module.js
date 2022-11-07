"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar/navbar.component");
var home_component_1 = require("./home/home.component");
var animations_1 = require("@angular/platform-browser/animations");
var footer_component_1 = require("./footer/footer.component");
var about_component_1 = require("./about/about.component");
// import {MatStepperModule} from '@angular/material/stepper';
var stepper_component_1 = require("./stepper/stepper.component");
// import { MatFormFieldModule} from '@angular/material/form-field';
var ngx_hide_on_scroll_1 = require("ngx-hide-on-scroll");
var slider_component_1 = require("./slider/slider.component");
var slider2_component_1 = require("./slider2/slider2.component");
var service_component_1 = require("./service/service.component");
var tabs_1 = require("@angular/material/tabs");
var radio_1 = require("@angular/material/radio");
var checkbox_1 = require("@angular/material/checkbox");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                home_component_1.HomeComponent,
                footer_component_1.FooterComponent,
                about_component_1.AboutComponent,
                slider_component_1.SliderComponent,
                slider2_component_1.Slider2Component,
                service_component_1.ServiceComponent,
                stepper_component_1.StepperComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                ngx_hide_on_scroll_1.NgxHideOnScrollModule,
                tabs_1.MatTabsModule,
                radio_1.MatRadioModule,
                checkbox_1.MatCheckboxModule
            ],
            exports: [
            // MatStepperModule,
            // MatFormFieldModule,
            // MatTabsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
