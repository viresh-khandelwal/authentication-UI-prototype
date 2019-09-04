import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsernameComponent } from './username/username.component';
import { PasswordComponent } from './password/password.component';


const routes: Routes = [
  {path:'',component: UsernameComponent},
  {path:'password',component: PasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
