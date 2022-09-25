import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Affiliates } from 'src/app/model/affliates.model';
import { ApiService } from 'src/app/service/api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-child-display',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChildComponent implements OnInit, OnChanges {

  @Output() notify: EventEmitter<Affiliates> = new EventEmitter<Affiliates>();
  private _affliate2!: Affiliates;
  @Input() set affliate(val2: Affiliates) { this._affliate2 = val2; }
  get affliate(): Affiliates { return this._affliate2; }
  composer: any;
  reviewCount = {
    id: 0,
    reviews1: 0,
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
  allUser: any;
  totalRecords: any;
  allUser2: any;
  public rating0: any;
  public rating1: any;
  public rating2: any;
  public rating3: any;
  public rating4: any;
  public rating5: any;

  public brose0 = 1;
  public brose2 = 2;

  constructor(private api: ApiService, private httpClient: HttpClient, private formBuilder: FormBuilder) { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {

    this.getFriends2();
    this.displayDiscount();
    this.rating0 = 0;
    this.rating1 = 0;
    this.rating2 = 0;
    this.rating3 = 0;
    this.rating4 = 0;
    this.rating5 = 0;


  }

  handleClick() {
    this.notify.emit(this.affliate)
  }
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

  avg() {
    this.average1 = this.rating1 / 5;
    this.average2 = this.rating2 / 5;
    this.average3 = this.rating3 / 5;
    this.average4 = this.rating4 / 5;
    this.average5 = this.rating5 / 5;
    this.totalaverage = this.average1 + this.average2 + this.average3 + this.average4 + this.average5;
    /* this.count += 1;*/
  }

// below displaydiscount didnt work for me....just keeping code
  displayDiscount() {
      this.api.getAffiliates().subscribe((response) => {
      this.allUser = response;
      this.allUser2 = this.allUser.filter((product: { counted: any }) => product.counted == 5);
      // var x = document.getElementsByClassName("infocardContainer") as HTMLCollectionOf<HTMLElement>;
      // 
      // console.log(this._affliate2.counted);
      
      if (this.brose0 == 1) {
        // console.log(true);
        // x[this.brose0].style.display = 'none';
      }
      else {
        // console.log(false);
      }

      this.allUser2.forEach((row: any) => {
        if (row.counted <= 5) {
          // console.log("edu"+row.counted);

          // const elem = document.getElementById('badges2') as HTMLElement;
          // elem.style.display = "none";      


          // for (row.counted = 0; row.counted < x.length; row.counted++) {
          if (this._affliate2.counted == 5) {
            // x[this._affliate2.counted].style.display = 'none';

            // }

          }
        }
      });
    });
  }

  getFriends2() {
    this.reviewCount = {
      id: 0,
      reviews1: 0,
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

    this.api.getAffiliates().subscribe((response) => {
      this.allUser = response;
      this.totalRecords = this.allUser.length;
      // console.log(this.totalRecords);
      this.allUser.forEach((row: any) => {
        if (row.companyName == "fastcomets") {
          this.allUser2 = this.allUser.filter(
            (product: { companyName: string }) =>
              product.companyName === "fastcomets"
          ).length;

          //   this.totalRecords = this.allUser.length;

          this.reviewCount.id += parseInt(row.id);
          this.reviewCount.reviews1 += parseInt(row.totavg) / this.allUser2;
          this.reviewCount.userfriendly +=
            (parseInt(row.avg1) * 5) / this.allUser2;
          this.reviewCount.support +=
            (parseInt(row.avg2) * 5) / this.allUser2;
          this.reviewCount.features +=
            (parseInt(row.avg3) * 5) / this.allUser2;
          this.reviewCount.reliability +=
            (parseInt(row.avg4) * 5) / this.allUser2;
          this.reviewCount.pricing +=
            (parseInt(row.avg5) * 5) / this.allUser2;
          // console.log(this.reviewCount.reviews1);

        }
      });
    });
  }

  sortBy(prop: string) {
    return this.composer.arrcompositions.sort((a: { [x: string]: any; }, b: { [x: string]: any; }) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }
}

function getElementById(arg0: string) {
  throw new Error('Function not implemented.');
}
