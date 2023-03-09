import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from '../inbox/inbox.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {
    path: "",
    component: InboxComponent
  }
]

@NgModule({
  declarations: [
    InboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InboxModule { }
