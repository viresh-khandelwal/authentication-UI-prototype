import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsernameComponent } from './username/username.component';
import { PasswordComponent } from './password/password.component';
import { PasswordPageGuard } from './guards/password-page.guard';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'password',component: PasswordComponent, canActivate : [PasswordPageGuard]},
  {path:'signup', component: SignupComponent},
  {path:'',component: UsernameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
