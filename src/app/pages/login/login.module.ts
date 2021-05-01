import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent, LoginResetPwdDialog } from './login.component';

export const routes = [
  { path: '', component: LoginComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    LoginComponent,
    LoginResetPwdDialog
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class LoginModule { }
