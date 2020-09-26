import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { FlightSelectComponent } from './components/flight-select/flight-select.component';
import { HomeComponent } from './components/home/home.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"adminlogin",component: AdminloginComponent },
  {path: "userlogin", component: UserloginComponent},
  {path:"flightSelect",component:FlightSelectComponent},
  {path: "register",component: RegisterComponent}
]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
