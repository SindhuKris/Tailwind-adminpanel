import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes=[
  {
    path: "",
    component: HomeComponent,
    // children: [
    //   {
    //     path: 'dashboard',
    //     loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
    //   },
    // ]
  }
]


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class HomeModule { }
