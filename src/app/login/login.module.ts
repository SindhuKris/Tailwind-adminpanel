import { Component, NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes = [
 {
   path: "",
   component:LoginComponent
 }
]

@NgModule({
  declarations: [
    LoginComponent,
  ],

  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class LoginModule { }
