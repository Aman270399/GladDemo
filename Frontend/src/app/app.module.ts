import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { FlightSelectComponent } from './components/flight-select/flight-select.component';
import { FlightListComponent } from './components/flight-select/flight-list/flight-list.component';
import { TimeTransformPipe } from './pipes/time-transform.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    HeaderComponent,
    FooterComponent,

    AdminloginComponent,

    UserloginComponent,

    FlightSelectComponent,

    FlightListComponent,

    TimeTransformPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FormsModule,
    BrowserAnimationsModule,

   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
