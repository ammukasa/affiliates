import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponenthostgator } from './reviews-hostgator.component';
import { FormsModule } from '@angular/forms';

export const routes = [
    { path: '', component: AboutComponenthostgator }
];

@NgModule({
  declarations: [],
  imports: [
      CommonModule,FormsModule,
      RouterModule.forChild(routes)
  ]
})
export class hostgatorModule {}

 