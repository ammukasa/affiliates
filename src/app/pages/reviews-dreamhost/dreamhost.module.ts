import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponentdreamhost } from './reviews-dreamhost.component';
import { FormsModule } from '@angular/forms';

export const routes = [
    { path: '', component: AboutComponentdreamhost }
];

@NgModule({
  declarations: [],
  imports: [
      CommonModule,FormsModule,
      RouterModule.forChild(routes)
  ]
})
export class dreamhostrModule {}

 