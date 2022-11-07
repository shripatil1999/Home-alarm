import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
// import {MatStepperModule} from '@angular/material/stepper';
import { StepperComponent } from './stepper/stepper.component';
// import { MatFormFieldModule} from '@angular/material/form-field';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { SliderComponent } from './slider/slider.component';
import { Slider2Component } from './slider2/slider2.component';
import { ServiceComponent } from './service/service.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ShopComponent } from './shop/shop.component';
import { ShopProductComponent } from './shop-product/shop-product.component';
import { ShopCompoComponent } from './shop-compo/shop-compo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    SliderComponent,
    Slider2Component,
    ServiceComponent,
    StepperComponent,
    ShopComponent,
    ShopProductComponent,
    ShopCompoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxHideOnScrollModule, // Import NgxHideOnScrollModule
    MatTabsModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  exports: [
    // MatStepperModule,
    // MatFormFieldModule,
    // MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
