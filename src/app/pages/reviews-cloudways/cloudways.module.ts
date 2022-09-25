import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponentcloudways } from './reviews-cloudways.component';
import { FormsModule } from '@angular/forms';

export const routes = [
    { path: '', component: AboutComponentcloudways }
];

@NgModule({
  declarations: [],
  imports: [
      CommonModule,FormsModule,
      RouterModule.forChild(routes)
  ]
})
export class cloudwaysModule {}

 