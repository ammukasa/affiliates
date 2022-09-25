import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Best 10 Web Hosting Solutions';

  showMore = false;
  public isExpanded = false;
  displayedColumns: string[] = ['productName', 'category', 'date', 'price', 'comment'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private randomUser:RandomUserService, private dialog : MatDialog, private api : ApiService) { 

  }

  
  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30%'
    });
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public rating1: any;
  public rating2: any;

  ngOnInit(): void {
    // this.getAllProducts();
    this.rating1 = 0;
    this.rating2 = 0;
  }

  submitForm(form: NgForm) {
    form.resetForm();
    console.log("Rating 1: " + this.rating1);
    console.log("Rating 1: " + this.rating2);
    this.rating1 = 0;
    this.rating2 = 0;
}

currentRating= 2;
txtRateValue = 0;
totalaverage=0;
average1 = 0;
average2 = 0;
count = 0;
updateRating(){
  this.currentRating = this.txtRateValue;
}

avg() {
 /* this.average = (this.average*this.count + this.currentRating) / (this.count + 1);*/
 this.average1 =this.rating1 / 5;
 this.average2 =this.rating2 / 5;
 this.totalaverage=this.average1 + this.average2;
 /* this.count += 1;*/
}

onShow () {
  this.showMore = !this.showMore;
}

text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
}

