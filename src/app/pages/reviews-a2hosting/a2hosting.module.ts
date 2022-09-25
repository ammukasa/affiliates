import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponenta2hosting } from './reviews-a2hosting.component';
import { FormsModule } from '@angular/forms';

export const routes = [
    { path: '', component: AboutComponenta2hosting }
];

@NgModule({
  declarations: [],
  imports: [
      CommonModule,FormsModule,
      RouterModule.forChild(routes)
  ]
})
export class a2hostingModule {}

 