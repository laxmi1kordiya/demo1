import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './app/service/service.component';
import { PortfolioComponent } from './app/portfolio/portfolio.component';
import { AllComponent } from './app/all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    PortfolioComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
