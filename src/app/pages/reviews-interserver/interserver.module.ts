import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponentinterserver } from './reviews-interserver.component';
import { FormsModule } from '@angular/forms';

export const routes = [
    { path: '', component: AboutComponentinterserver }
];

@NgModule({
  declarations: [],
  imports: [
      CommonModule,FormsModule,
      RouterModule.forChild(routes)
  ]
})
export class interserverModule {}

 