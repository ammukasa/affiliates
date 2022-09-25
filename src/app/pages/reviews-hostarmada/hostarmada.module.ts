import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponenthostarmada } from './reviews-hostarmada.component';
import { FormsModule } from '@angular/forms';

export const routes = [
    { path: '', component: AboutComponenthostarmada }
];

@NgModule({
  declarations: [],
  imports: [
      CommonModule,FormsModule,
      RouterModule.forChild(routes)
  ]
})
export class hostarmadaModule {}

 