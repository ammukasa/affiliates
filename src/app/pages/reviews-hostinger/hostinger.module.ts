import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponenthostinger } from './reviews-hostinger.component';
import { FormsModule } from '@angular/forms';

export const routes = [
    { path: '', component: AboutComponenthostinger }
];

@NgModule({
  declarations: [],
  imports: [
      CommonModule,FormsModule,
      RouterModule.forChild(routes)
  ]
})
export class hostingerModule {}

 