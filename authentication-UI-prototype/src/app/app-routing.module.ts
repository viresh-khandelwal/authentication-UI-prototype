import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsernameComponent } from './username/username.component';
import { PasswordComponent } from './password/password.component';
import { PasswordPageGuard } from './guards/password-page.guard';


const routes: Routes = [
  {path:'',component: UsernameComponent},
  {path:'password',component: PasswordComponent, canActivate : [PasswordPageGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
