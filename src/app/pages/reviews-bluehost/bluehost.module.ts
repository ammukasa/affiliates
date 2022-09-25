import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponentbluehost } from './reviews-bluehost.component';
import { FormsModule } from '@angular/forms';

export const routes = [
    { path: '', component: AboutComponentbluehost }
];

@NgModule({
  declarations: [],
  imports: [
      CommonModule,FormsModule,
      RouterModule.forChild(routes)
  ]
})
export class bluehostModule {}

 