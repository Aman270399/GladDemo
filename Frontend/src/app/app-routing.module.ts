import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { FlightSelectComponent } from './components/flight-select/flight-select.component';
import { HomeComponent } from './components/home/home.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { RegisterComponent } from './components/register/register.component';
import { AddflightComponent } from './components/addflight/addflight.component';
import { DeleteflightComponent } from './components/deleteflight/deleteflight.component';
import { AdminviewComponent } from './components/adminview/adminview.component';
import { PassengerdetailsComponent } from './components/passengerdetails/passengerdetails.component';

const routes: Routes = [
  {path:"",redirectTo: '/home', pathMatch: 'full'},
  {path:"home",component:HomeComponent},
  {path:"adminlogin",component: AdminloginComponent },
  {path: "userlogin", component: UserloginComponent},
  {path:"flightSelect",component:FlightSelectComponent},
  {path: "register",component: RegisterComponent},
  {path: "addflight",component: AddflightComponent},
  {path: "deleteflight",component: DeleteflightComponent},
  {path: "adminview", component: AdminviewComponent},
  {path: "passengerdetail",component:PassengerdetailsComponent},
]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
