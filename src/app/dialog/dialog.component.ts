import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; '@angular/material/dialog';

import { NgForm } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
 
  displayedColumns: string[] = ['productName', 'comment', 'fullName2', 'emailAdress', 
  'linkName','avg1','avg2','avg3','avg4','avg5','totavg'];
  // displayedColumns: string[] = ['productName', 'comment', 'fullName', 'emailAdress', 'linkName', 'average1',
  // 'average2', 'average3', 'average4', 'average5', 'totalaverage'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /*freshnessList = ["Brand New", "Second Hand", "Refurbished"]*/
  productForm !: FormGroup;
  productForm2 !: FormGroup;
 
  constructor(private dialog : MatDialog, private formBuilder : FormBuilder, @Inject(MAT_DIALOG_DATA) public editData : any,
     private api : ApiService, private dialogRef : MatDialogRef<DialogComponent>) {

  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
    productName : ['',Validators.required],
    comment : ['',Validators.required],
    fullName2 : ['',Validators.nullValidator],
    emailAdress : ['',Validators.email],
    linkName : ['',Validators.required],
    avg1 : [this.average1,Validators.min(0.2)],
    avg2 : [this.average2,Validators.min(0.2)],
    avg3 : [this.average3,Validators.min(0.2)],
    avg4 : [this.average4,Validators.min(0.2)],
    avg5 : [this.average5,Validators.min(0.2)],
    totavg : [this.totalaverage,Validators.min(0.2)],
    email: String

    });


    this.productForm2 = this.formBuilder.group({
      productName : ['',Validators.required],
       
      });

    // console.log(this.editData);

    const broseid = this.editData.id;
    
      // this.productForm.controls['productName'].setValue("broseEdule");
      if(this.editData){
        this.productForm2.controls['productName'].setValue("brose1");
      }
    

    this.rating1 = 3.5;
    this.rating2 = 0;
    this.rating3 = 0;
    this.rating4 = 0;
    this.rating5 = 0;
 
  }

  addProduct(){
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("Product added successfully")
          this.productForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding the product")
        }

      })
      
    }
    
  }

  updateProduct1(){
    this.api.putProduct(this.productForm2.value,1)
    .subscribe({
      next:(res)=>{
        alert("updated");
      },
      error:()=>{
        alert("failed"); 
      }
    })
  }


  public rating1: any;
  public rating2: any;
  public rating3: any;
  public rating4: any;
  public rating5: any;



  submitForm(form: NgForm) {
    form.resetForm();
    console.log("Rating 1: " + this.rating1);
    console.log("Rating 1: " + this.rating2);
    console.log("Rating 1: " + this.rating3);
    console.log("Rating 1: " + this.rating4);
    console.log("Rating 1: " + this.rating5);
    this.rating1 = 0;
    this.rating2 = 0;
    this.rating3 = 0;
    this.rating4 = 0;
    this.rating5 = 0;
}

currentRating= 2;
txtRateValue = 0;
totalaverage=0;
average1 = 0;
average2 = 0;
average3 = 0;
average4 = 0;
average5 = 0;
count = 0;
updateRating(){
  this.currentRating = this.txtRateValue;
}

avg() {
 /* this.average = (this.average*this.count + this.currentRating) / (this.count + 1);*/
 this.average1 =this.rating1 / 5;
 this.average2 =this.rating2 / 5;
 this.average3 =this.rating3 / 5;
 this.average4 =this.rating4 / 5;
 this.average5 =this.rating5 / 5;
 this.totalaverage=this.average1 + this.average2 + this.average3 + this.average4 + this.average5;
 /* this.count += 1;*/
}

}
