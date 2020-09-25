import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< Updated upstream
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent}
=======
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';

const routes: Routes = [
  {path:"adminLogin",component: AdminloginComponent },
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
