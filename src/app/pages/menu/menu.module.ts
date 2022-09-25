import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { FormsModule } from '@angular/forms';

export const routes = [
    { path: '', component: MenuComponent }
];

@NgModule({
  declarations: [],
  imports: [
      CommonModule,FormsModule,
      RouterModule.forChild(routes)
  ]
})
export class menuModule {}

 