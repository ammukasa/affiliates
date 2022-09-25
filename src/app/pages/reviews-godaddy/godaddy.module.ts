import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponentgodaddy } from './reviews-godaddy.component';
import { FormsModule } from '@angular/forms';

export const routes = [
    { path: '', component: AboutComponentgodaddy }
];

@NgModule({
  declarations: [],
  imports: [
      CommonModule,FormsModule,
      RouterModule.forChild(routes)
  ]
})
export class godaddyrModule {}

 