import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './app/service/service.component';
import { PortfolioComponent } from './app/portfolio/portfolio.component';
import { AllComponent } from './app/all/all.component';
import { RotateComponent } from './app/css property/rotate.component';
import { JobsFairComponent } from './app/jobs-fair/jobs-fair.component';
import { BorderComponent } from './cssproperty/border/border.component';
import { PseudoComponent } from './pseudo/pseudo.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:'Home',component: AllComponent},
  {path:'about-us',component: JobsFairComponent },
  {path:'service',component: ServiceComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    PortfolioComponent,
    AllComponent,
    RotateComponent,
    JobsFairComponent,
    BorderComponent,
    PseudoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
