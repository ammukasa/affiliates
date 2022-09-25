import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { Overlay } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Affiliates } from "src/app/model/affliates.model";
import { OrderPipe } from 'ngx-order-pipe';
import { interval, Subscription, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api.service';
'@angular/material/dialog';

declare var require: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  intervalId: number = 0;
  // aff: Affiliates2[] = [];

  title = '';
  affliates: Affiliates[] = [];

  // private _aff!: Affiliates2;
  // @Input() set _aff2(val: Affiliates2) {
  //   this._aff2 = val;
  // }

  // get tutorial(): Affiliates2 {
  //   return this._aff;
  // }

  isReadMore = true
  composer: any;

  dataFromChild!: Affiliates;
  allcomet: any;
  alldreamhost: any;
  subscription!: Subscription;
  allhostarmada: any;
  allgodaddy: any;
  allhostinger: any;
  allhostpapa: any;
  allionos: any;
  allhostgator: any;
  allinterserver: any;
  updateForm!: FormGroup;

  todayDate: Date = new Date();

  showText() {
    this.isReadMore = !this.isReadMore
  }

  genderCount = {
    male: 0,
    female: 0,
    other: 0
  };
  reviewCount = {
    id: 0,
    reviews1: 0,
    allcomet2: 0,
    alldreamhost2: 0,
    allhostarmada2: 0,
    allgodaddy2: 0,
    allhostinger2: 0,
    allhostpapa2: 0,
    allhostgator2: 0,
    allionos2: 0,
    allinterserver2: 0,
    userfriendly: 0,
    support: 0,
    features: 0,
    reliability: 0,
    pricing: 0,
    commentApproved: "",
    companyName: "",
    productName: "",
    comment: "",
    fullName: "",
    emailAdress: "",
    linkName: "",
    avg1: 0,
    avg2: 0,
    avg3: 0,
    avg4: 0,
    avg5: 0,
    totavg: 0,
    vote: 0,
  };

  displayedColumns: string[] = ['productName', 'category', 'date', 'price', 'comment', 'action'];
  dataSource!: MatTableDataSource<any>;

  productForm !: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ApiService, private orderPipe: OrderPipe, private router: Router, private service: OrderDetailsService,
    private formBuilder: FormBuilder, private commonService: CommonService,
    private dialog: MatDialog, private overlay: Overlay, private httpClient: HttpClient) {

    this.updateForm = this.formBuilder.group({
      companyName: [""],
      companyHeading: [""],
      companyImage: [""],
      companyUrl: [""],
      navUrl: [""],
      features1: [""],
      features2: [""],
      features3: [""],
      features4: [""],
      features5: [""],
      addedadv1: [""],
      addedadv2: [""],
      addedadv3: [""],
      addedadv4: [""],
      addedadv5: [""],
      visited: [""],
      counted: [""],
      totavg: [""],
      all_reviews: [""],
      discount_sale: [""],
      discount_status: [""],
      discount_per: [""],
      low_sale: [""],
    });
  }
  foodData: any;

  invsum: any = [];

  allUser: any;
  allUser2: any;
  totalRecords: any;



  openDialog(): void {
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    const dialogRef = this.dialog.open(DialogComponent, {
      height: 'auto',
      width: '70%',
      // maxHeight: '190vh', //you can adjust the value as per your view
      scrollStrategy,
      autoFocus: false,
    });
  }

  reviewvote = {
    _companyName: "",
    _visited: 0,
    _counted: 0,

  }


  childid = 0;
  childunique = "";
  handleNotify(eventData: Affiliates) {
    this.dataFromChild = eventData;
    this.childid = this.dataFromChild.id;
    this.childunique = this.dataFromChild._id;

    this.api.GetItem2(this.childunique).subscribe(res => {
      this.updateForm.setValue({
        companyName: res['companyName'],
        companyHeading: res["companyHeading"],
        companyImage: res["companyImage"],
        companyUrl: res["companyUrl"],
        navUrl: res["navUrl"],
        features1: res["features1"],
        features2: res["features2"],
        features3: res["features3"],
        features4: res["features4"],
        features5: res["features5"],
        addedadv1: res["addedadv1"],
        addedadv2: res["addedadv2"],
        addedadv3: res["addedadv3"],
        addedadv4: res["addedadv4"],
        addedadv5: res["addedadv5"],
        visited: res["visited"] + 1,
        counted: res["counted"],
        totavg: res["totavg"],
        all_reviews: res["all_reviews"],
        discount_sale: res["discount_sale"],
        discount_status: res["discount_status"],
        discount_per: res["discount_per"],
        low_sale: res["low_sale"],
      });

      document.getElementById("updatestock2")?.click();
    });
  }

  onUpdate2(): any {
    this.api.updateItem2(this.childunique, this.updateForm.value)
      .subscribe(() => {
      }, (err) => {
        console.log(err);
      });
  }
  updateAffliateRatin() {
    this.api.getHostarmada().subscribe((response) => {

      this.allUser = response;
      this.allcomet = this.allUser.length;
      console.log(this.allcomet);

      this.allUser.forEach((row: any) => {
        // this.allcomet = this.allUser.filter((product: { companyName: string }) => product.companyName === "fastcomet").length;
        this.reviewCount.allcomet2 += parseInt(row.totavg) / this.allcomet;
        
        this.api.GetItem2(4).subscribe(res => {
          this.updateForm.setValue({
            companyName: res["companyName"],
            companyHeading: res["companyHeading"],
            companyImage: res["companyImage"],
            companyUrl: res["companyUrl"],
            navUrl: res["navUrl"],
            features1: res["features1"],
            features2: res["features2"],
            features3: res["features3"],
            features4: res["features4"],
            features5: res["features5"],
            addedadv1: res["addedadv1"],
            addedadv2: res["addedadv2"],
            addedadv3: res["addedadv3"],
            addedadv4: res["addedadv4"],
            addedadv5: res["addedadv5"],
            visited: res["visited"],
            counted: res["counted"],
            totavg: this.reviewCount.allcomet2,
            all_reviews: this.allcomet,
            discount_sale: res["discount_sale"],
            discount_status: res["discount_status"],
            discount_per: res["discount_per"],
            low_sale: res["low_sale"],

          });
          document.getElementById("updatestock")?.click();
        });
      });
    });
  }

  onUpdate(): any {
    this.api.updateItem2(4, this.updateForm.value)
      .subscribe(() => {
        console.log('updated successsfully');

      }, (err) => {
        console.log(err);
      });
  }

  editProduct(row: any) {
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    this.dialog.open(DialogComponent, {

      height: 'auto',
      width: '70%',
      // maxHeight: '190vh', //you can adjust the value as per your view
      scrollStrategy,
      autoFocus: false,
      data: row
    })

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  userObj = {
    productName: '', category: '', price: '', comment: '', date: '', id: ''
  }


  ngOnInit(): void {
    // this.getAllProducts();
    this.getFriends();
    this.getLatestUser();
    this.getallAffiliates();

    // this.retrieveTutorials();
    this.updateAffliateRatin();
    //  const resetAtMidnight = () => {
    const now = new Date();
    const night = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      now.getHours(),
      now.getMinutes()
    ); let msToMidnight = night.getTime() - now.getTime();
    console.log(msToMidnight);

    setTimeout(() => {
      this.updateAffliateRatin();              //      <-- This is the function being called at midnight.
      // resetAtMidnight();    //      Then, reset again next midnight.
    }, msToMidnight);
    // }
    // var unow = new Date();
    // var millisTill10 = new Date(unow.getFullYear(), unow.getMonth(), unow.getDate(), 10, 0, 0, 0) - unow;
    if (msToMidnight < 0) {
      msToMidnight += 86400000; // it's after 10am, try 10am tomorrow.
    }
    setTimeout(function () { alert("It's 10am!") }, msToMidnight);


    window.setInterval(() => { // Set interval for checking
      var date = new Date(); // Create a Date object to find out what time it is
      if (date.getHours() === 22 && date.getMinutes() === 42) { // Check the time
        // Do stuff
        this.updateAffliateRatin();
      }
    }, 60000); // Repeat every 60000 milliseconds (1 minute)

    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      comment: ['', Validators.required],
      fullName: ['', Validators.nullValidator],
      emailAdress: ['', Validators.email],
      linkName: ['', Validators.required],
      avg1: [this.average1, Validators.min(0.2)],
      avg2: [this.average2, Validators.min(0.2)],
      avg3: [this.average3, Validators.min(0.2)],
      avg4: [this.average4, Validators.min(0.2)],
      avg5: [this.average5, Validators.min(0.2)],
      totavg: [this.totalaverage, Validators.min(0.2)],
      email: String



    });
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    this.rating0 = 0;
    this.rating1 = 0;
    this.rating2 = 0;
    this.rating3 = 0;
    this.rating4 = 0;
    this.rating5 = 0;



    // top button
    var mybutton = document.getElementById("myBtn") as HTMLDivElement;
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // end top button




  }

  topFunction() {
    window.scrollTo(0, 0);
  }


  getallAffiliates() {
    this.api.getAffiliates().subscribe((data) => {
      this.affliates = data;

    },
      error => {
        console.log(error);
      });


  }


  ngOnDestroy() {
    // For method 1
    // this.subscription && this.subscription.unsubscribe();
  }
  public rating0: any;
  public rating1: any;
  public rating2: any;
  public rating3: any;
  public rating4: any;
  public rating5: any;
  submitForm(form: NgForm) {
    form.resetForm();
    console.log("Rating 1: " + this.rating0);
    console.log("Rating 1: " + this.rating1);
    console.log("Rating 1: " + this.rating2);
    console.log("Rating 1: " + this.rating3);
    console.log("Rating 1: " + this.rating4);
    console.log("Rating 1: " + this.rating5);

  }
  currentRating = 2;
  txtRateValue = 0;
  totalaverage = 0;
  average1 = 0;
  average2 = 0;
  average3 = 0;
  average4 = 0;
  average5 = 0;
  count = 0;
  updateRating() {
    this.currentRating = this.txtRateValue;
  }
  getLatestUser() {
    // this.commonService.getAllUser().subscribe((response) => {
    this.api.getAffiliates().subscribe((response) => {
      this.allUser = response;
      this.totalRecords = this.allUser.length;
      this.getFriends();
      this.allUser.forEach((row: { checked: boolean; }) => row.checked = false);

    });
  }
  scrollTop() {
    window.scrollTo(0, 0);
  }
  getFriends() {

    this.genderCount = { male: 0, female: 0, other: 0 };
    this.api.getAffiliates().subscribe((response) => {
      this.allUser = response;
      this.allUser.forEach((row: any) => {
        if (row.price) {
          this.genderCount.male += row.price / this.totalRecords;
          this.rating0 = this.genderCount.male;
          // console.log(response);
        }
      });
    });


  }
  avg() {
    /* this.average = (this.average*this.count + this.currentRating) / (this.count + 1);*/
    this.average1 = this.rating1 / 5;
    this.average2 = this.rating2 / 5;
    this.average3 = this.rating3 / 5;
    this.average4 = this.rating4 / 5;
    this.average5 = this.rating5 / 5;
    this.totalaverage = this.average1 + this.average2 + this.average3 + this.average4 + this.average5;
    /* this.count += 1;*/
  }
}


