import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< Updated upstream
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
=======
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule } from '@angular/forms';
>>>>>>> Stashed changes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< Updated upstream
    FormsModule,
    ReactiveFormsModule
=======
    AngularMaterialModule,
    FormsModule,
    BrowserAnimationsModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
