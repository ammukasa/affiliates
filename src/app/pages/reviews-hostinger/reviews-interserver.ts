import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { AppComponent } from '../menu/menu.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { DisplayCommentsComponenthostinger } from './display-comments-hostinger.component';
import {MatExpansionModule} from '@angular/material/expansion';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from 'src/app/app.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    JwPaginationModule,
    NgxPaginationModule ,
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatTreeModule,
    MatIconModule, 
    MatButtonModule],
  declarations: [ AppComponent, DisplayCommentsComponenthostinger ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

