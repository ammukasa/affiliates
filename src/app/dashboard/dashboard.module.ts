import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { NavbarComponent } from '../sharepage/navbar/navbar.component';
import { FooterComponent } from '../sharepage/footer/footer.component';
import { HomeComponent } from '../pages/home/home.component';
import { MenuComponent } from '../pages/menu/menu.component';
import { AboutComponent } from '../pages/reviews-fastcomet/reviews-fastcomet.component';
import { ContactComponent } from '../pages/about-us/about-us.component';
import { MenupageComponent } from '../pages/menupage/menupage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule, } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { JwPaginationModule } from 'jw-angular-pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import { DisplayCommentsComponent } from '../pages/reviews-fastcomet/display-comments.component';
import { VisitorsService } from '../pages/reviews-fastcomet/visitors.service';
import {MatExpansionModule} from '@angular/material/expansion';
import { FieldErrorDisplayComponent } from '../pages/reviews-fastcomet/field-error-display.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import {MatStepperModule} from '@angular/material/stepper';
import {AngularStickyThingsModule} from '@w11k/angular-sticky-things';
import {MatMenuModule} from '@angular/material/menu';
import { OrderModule } from 'ngx-order-pipe';
import { NgpSortModule } from "ngp-sort-pipe";
import { OrderByPipe } from '../pages/home/orderby.pipe';
import { ChildComponent } from '../pages/home/child.component';
import { DisplayCommentsComponentBluehost } from '../pages/reviews-bluehost/display-comments-blusthost.component';
import { FieldErrorDisplayComponentBluehost } from '../pages/reviews-bluehost/field-error-display-blusthost.component';
import { BluehostComponent } from '../pages/reviews-bluehost/reviews-bluehost.component';
import { DreamhostComponent } from '../pages/reviews-dreamhost/reviews-dreamhost.component';
import { interserverComponent } from '../pages/reviews-interserver/reviews-interserver.component';
import { hostarmadaComponent } from '../pages/reviews-hostarmada/reviews-hostarmada.component';
import { ionosComponent } from '../pages/reviews-ionos/reviews-ionos.component';
import { godaddyComponent } from '../pages/reviews-godaddy/reviews-godaddy.component';
import { hostgatorComponent } from '../pages/reviews-hostgator/reviews-hostgator.component';
import { hostingerComponent } from '../pages/reviews-hostinger/reviews-hostinger.component';
import { hostpapaComponent } from '../pages/reviews-hostpapa/reviews-hostpapa.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    MenupageComponent,
    DialogComponent,
    DialogComponent,
    DisplayCommentsComponent,
    DisplayCommentsComponentBluehost,
    FieldErrorDisplayComponent,
    FieldErrorDisplayComponentBluehost,
    OrderByPipe,
    ChildComponent,
    BluehostComponent,
    DreamhostComponent,
    interserverComponent,
    hostarmadaComponent,
    ionosComponent,
    godaddyComponent,
    hostgatorComponent,
    hostingerComponent,
    hostpapaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    JwPaginationModule,
    NgxPaginationModule,
    MatTabsModule,
    MatDividerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule, 
    MatButtonModule,
    MatExpansionModule,
    NgxHideOnScrollModule,
    MatStepperModule,
    AngularStickyThingsModule,
    MatMenuModule,
    OrderModule,
    NgpSortModule ,
    
    
  ],
  providers: [VisitorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
