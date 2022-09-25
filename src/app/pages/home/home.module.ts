import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
