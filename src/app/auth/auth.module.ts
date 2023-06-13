import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path:'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path:"blogs",
        loadChildren: () => import('../blogs/blogs.module').then(m => m.BlogsModule)
      },
      {
        path:"reports",
        loadChildren: () => import('../reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path:"inbox",
        loadChildren: () => import('../inbox/inbox.module').then(m => m.InboxModule)
      },
      {
          path: 'login',
          loadChildren: () => import('../login/login.module').then(m => m.LoginModule)
        },
        {
          path:'register',
          loadChildren:() => import("../register/register.module").then(m=>m.RegisterModule)
      
        },
        {
          path:'**',
          redirectTo: 'home'
        }
    ]
  }
]

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
