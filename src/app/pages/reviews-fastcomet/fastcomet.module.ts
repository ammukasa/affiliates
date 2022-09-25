import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './reviews-fastcomet.component';
import { FormsModule } from '@angular/forms';

export const routes = [
    { path: '', component: AboutComponent }
];

@NgModule({
  declarations: [],
  imports: [
      CommonModule,FormsModule,
      RouterModule.forChild(routes)
  ]
})
export class fastcometModule {}

 