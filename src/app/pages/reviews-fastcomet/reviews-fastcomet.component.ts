import { Component, OnInit, AfterViewChecked, ElementRef, Input, HostListener } from "@angular/core";
import { NgForm, FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ApiService } from "src/app/service/api.service";
import { DialogComponent } from "src/app/dialog/dialog.component";
import { Overlay } from "@angular/cdk/overlay";
import { HttpClient } from "@angular/common/http";
import { switchMap } from "rxjs/operators";
import { CommonService } from "src/app/common.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms"; ("@angular/material/dialog");
import { Employee, Employeeupate } from "src/app/model/employee.model";
import { RandomUserService } from "src/app/services/random-user.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { DatePipe } from "@angular/common";
import { Observable } from "rxjs/internal/Observable";
import { ActivatedRoute, NavigationEnd, Router, RouterLinkWithHref } from "@angular/router";
import { VisitorsService } from "./visitors.service";

interface PeopleData {
  name: string;
  birthYear: string;
  height: number;
  weight: number;
  eyeColor: string;
}

@Component({
  selector: "app-about",

  templateUrl: "./reviews-fastcomet.component.html",
  styleUrls: ["./reviews-fastcomet.component.css"],
  providers: [DatePipe]
})
export class AboutComponent implements OnInit, AfterViewChecked, ElementRef {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  employees: Employee[] = [];

  dataFromChild!: Employee;

  // dataFromChildupdate!: Employeeupate;
  name = new FormControl('', Validators.required);
  isSticky: boolean = false;
  activatedRoute: any;
  // getId: any;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 250;
  }

  @Input() errorMsg: string = "";
  @Input() displayError: boolean | undefined;

  panelOpenState = false;

  private arrayIndex = 1;

  toggle: boolean = true;

  hasSearched = false;
  lukeData$!: Observable<PeopleData>;

  data: Array<any>;
  totalRec: number = 0;
  page: number = 1;
  responsiveP: boolean = true;
  closeResult = "";

  vontedata = '';
  vontedata2 = '';
  vontedataid :number=0;
  vontedataid2 = '';

  // ---location for user

  ipaddress: string = '';
  latitude: string = '';
  longitude: string = '';
  currency: string = '';
  currencysymbol: string = '';
  isp: string = '';
  city: string = '';
  country: string = '';
  userIP = '';

  genderCount = {
    male: 0,
    female: 0,
    other: 0,
  };

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

  reviewvote = {
    _currentDate: Date,
    _reviews1: "",
    _userfriendly: "",
    _support: "",
    _features: "",
    _reliability: "",
    _pricing: "",
    _commentApproved: "",
    _companyName: "",
    _productName: "",
    _comment: "",
    _fullName: "",
    _emailAdress: "",
    _linkName: "",
    _avg1: "",
    _avg2: "",
    _avg3: "",
    _avg4: "",
    _avg5: "",
    _totavg: "",
    _vote: 0,
    _vote2: 0,
    _ip: "",
    // _country: "",
    _id: 0,
  };

  dataSource!: MatTableDataSource<any>;

  productForm!: FormGroup;
  updateForm!: FormGroup;
  // productForm2!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // @ViewChild(MatPaginator, {static: true}) paginator2!: MatPaginator;

  currentDate = new Date();
  modalCtrl: any;
  matDialog: any;
  tabsContentRef: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private modalService: NgbModal,
    private randomUser: RandomUserService,
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private dialog: MatDialog,
    // private api: ApiService,
    private overlay: Overlay,
    private httpClient: HttpClient,
    private visitorsService: VisitorsService,
    private api: ApiService
  ) {
    // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    // this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.data = new Array<any>();

    this.startPage = 0;
    this.paginationLimit = 10;

    this.productForm = this.formBuilder.group({
      currentDate: new Date(),
      commentApproved: ["Yes"],
      companyName: ["", Validators.required],
      productName: ["", Validators.required],
      comment: ["", Validators.required],
      fullName: ["", Validators.required],
      emailAdress: ["", Validators.required],
      linkName: ["", Validators.nullValidator],
      avg1: [this.average1, Validators.min(0.2)],
      avg2: [this.average2, Validators.min(0.2)],
      avg3: [this.average3, Validators.min(0.2)],
      avg4: [this.average4, Validators.min(0.2)],
      avg5: [this.average5, Validators.min(0.2)],
      totavg: [this.totalaverage, Validators.min(0.2)],
      voteh: 0,
      voten: 0,
      ip: "",
      id: 0,
      // email: String,
    });

    

    this.updateForm = this.formBuilder.group({
      currentDate: new Date(),
      commentApproved: ["Yes"],
      companyName: ["", Validators.required],
      productName: ["", Validators.required],
      comment: ["", Validators.required],
      fullName: ["", Validators.required],
      emailAdress: ["", Validators.email],
      linkName: ["", Validators.nullValidator],
      avg1: [this.average1, Validators.min(0.2)],
      avg2: [this.average2, Validators.min(0.2)],
      avg3: [this.average3, Validators.min(0.2)],
      avg4: [this.average4, Validators.min(0.2)],
      avg5: [this.average5, Validators.min(0.2)],
      totavg: [this.totalaverage, Validators.min(0.2)],
      voteh: 0,
      voten: 0,
      ip: "",
    });


    
  }
  nativeElement: any;
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  open(content: any) {
    this.modalService
      .open(content, { size: "xl", ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  showMore = false;
  allUser: any;
  allUser2: any;
  avgcount: any;
  startPage = 0;
  paginationLimit = 10;

  allUser3: any;
  totalRecords: number = 0;
  totalReviews: any;
  isVisible: boolean = true;

  onShow() {
    this.showMore = !this.showMore;
  }




  hideList() {
    this.isVisible = false;
  }

  openDialog(): void {
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    const dialogRef = this.dialog.open(DialogComponent, {
      height: "",
      width: "70%",
      scrollStrategy,
      autoFocus: false,
    });
  }
  /**his.dialog.open(DialogComponent */
  getAllProducts() {
    this.api.getFastcomet().subscribe({
      next: (res) => {
// console.log(res);

      },
      error: (err) => {
        alert("Error while fetching the Records !!");
      },
    });
  }

  editProduct() {
    this.dialog.open(DialogComponent, {
      // height: 'auto',
      width: "30%",
      data: RouterLinkWithHref,
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public currentPage: number = Number(localStorage.getItem("page"));

  onPageChange(page: number) {

    this.currentPage = page;
    localStorage.setItem("page", String(page));
    console.log(this.currentPage);

    window.scrollTo(0, 0);

  }

  userObj = {
    productName: "",
    category: "",
    price: "",
    comment: "",
    fullName: "",
    date: "",
    id: "",
  };
  selectedTabIndex: number = 0;
  // collectionSize!:string;

  tabRemain() {
    this.selectedTabIndex = parseInt(this.route.snapshot.queryParamMap.get("tab") || "", 10);
    // this.collectionSize = this.route.queryParamMap.subscribe((params:any) => { this.page = +params.get('page')});
    if (isNaN(this.selectedTabIndex) || this.selectedTabIndex < 0) {
      this.selectedTabIndex = 0;
    }
  }

  lat: number = 0;
  lon: number = 0;
  ngOnInit(): void {
    this.getAllProducts();
    this.getFriends();
    this.getLatestUser();
    this.getReviewCount();
    this.getallUser();
    this.onShow();
    this.updateProduct2();
    this.tabRemain();
    this.loadIp();
    this.scrollToBottom();


    

    this.visitorsService.getIpAddress().subscribe((res: any) => {
      this.ipaddress = res['ip'];
      // console.log(this.ipaddress);
      // this.visitorsService.getGEOLocation(this.ipaddress).subscribe((res: any) => {

      //   this.latitude = res['latitude'];
      //   this.longitude = res['longitude'];
      //   this.currency = res['currency']['code'];
      //   this.currencysymbol = res['currency']['symbol'];
      //   this.city = res['city'];
      //   this.country = res['country_name'];
      //   this.isp = res['isp'];
      // console.log(res);
      // });
      // console.log(res);

    });

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    // top button
    var mybutton = document.getElementById("myBtn") as HTMLDivElement;
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    // end top button
   

    this.ratingreview = 0;
    this.rating0 = 0;
    this.rating1 = 0;
    this.rating2 = 0;
    this.rating3 = 0;
    this.rating4 = 0;
    this.rating5 = 0;
  }


  topFunction() {
    window.scrollTo(0, 0);
  }

  scrollshared() {
    let el = document.getElementById("scrolltoshared") as HTMLDivElement;
    el.scrollIntoView({behavior: 'smooth'});

  }

  scrollvps() {
    let el = document.getElementById("scrollvps") as HTMLDivElement;
    el.scrollIntoView({behavior: 'smooth'});

  }

  scrollds() {
    let el = document.getElementById("scrollds") as HTMLDivElement;
    el.scrollIntoView({behavior: 'smooth'});

  }
  scrollch() {
    let el = document.getElementById("scrollch") as HTMLDivElement;
    el.scrollIntoView({behavior: 'smooth'});

  }

  isFieldValid(field: string) {
    return !this.productForm.get(field)?.valid && this.productForm.get(field)?.touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  xyx = 1;
  change() {
    if (this.xyx == 0) {
      this.toggle = !this.toggle
    } else {
      this.toggle != !this.toggle
    }
    // this.toggle = !this.toggle;
  }

  public x = <HTMLDivElement>document.getElementById('mycolstarrow');

  colorchange() {

    // this.x.style.borderColor = "black";
    this.x.style.border = "1px solid blue";
    if (this.average1 == 0) {
      this.x.style.borderColor = "green";
    } else {
      this.x.style.borderColor = "silver";
    }
  }

  adjustState(index: number) {
    for (var i = 0; i < this.data.length; i++) {
      if (index != i) {
        this.data[i].currentState = 'pause';
      } else {
        if (this.data[i].currentState == 'start') {
          this.data[i].currentState = 'pause';
        } else {
          this.data[i].currentState = 'start';
        }
      }
    }
  }

  validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });
  }

  loadIp() {
    this.httpClient.get('https://jsonip.com')
      .pipe(
        switchMap((value: any) => {
          this.userIP = value.ip;
          this.country = value.country_name;
          // let url = `http://api.ipstack.com/${value.ip}?access_key=1172d42bbd3c77ee2eaefd3b3d89f6cb`
          // let url = `https://api.ip2country.info/ip?41.210.154.65`
          let url = `http://ip-api.com/json/${value.ip}`

          return this.httpClient.get(url);
        })
      ).subscribe(
        (value: any) => {
          // console.log(value);
        },
        err => {
          // console.log(err);
        }
      );
  }

  

  onTabChange(selectedTabIndex: number): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        tab: selectedTabIndex,
      },
    });
    this.selectedTabIndex = selectedTabIndex;
  }

  reloadCurrentPage(): void {


    window.location.reload();
    // window.scrollTo(0, document.body.scrollHeight);
  }

  handleNotify(eventData: Employee) {
    this.dataFromChild = eventData;
    this.vontedata += this.dataFromChild.voteh;
    this.vontedata2 += this.dataFromChild.voten;
    this.vontedataid = this.dataFromChild.id;
    if (this.ipaddress == ""){
      alert("boss check internet connectivity");
    }else{
    this.api.GetItem(this.vontedataid).subscribe(res => {
      if(this.ipaddress == res['ip']){
        this.updateForm.setValue({
          currentDate: res['currentDate'],
          commentApproved: res['commentApproved'],
          companyName: res['companyName'],
          productName: res['productName'],
          comment: res['comment'],
          fullName: res['fullName'], 
          emailAdress: res['emailAdress'],
          linkName: res['linkName'],
          avg1: res['avg1'],
          avg2: res['avg2'],
          avg3: res['avg3'],
          avg4: res['avg4'],
          avg5: res['avg5'],
          totavg: res['totavg'],
          voteh: res['voteh']-1,
          voten: res['voten'],
          ip: "",
          
        });
        document.getElementById("updatestock")?.click(); 
        this.getallUser();
      } else{
        this.updateForm.setValue({
          currentDate: res['currentDate'],
          commentApproved: res['commentApproved'],
          companyName: res['companyName'],
          productName: res['productName'],
          comment: res['comment'],
          fullName: res['fullName'], 
          emailAdress: res['emailAdress'],
          linkName: res['linkName'],
          avg1: res['avg1'],
          avg2: res['avg2'],
          avg3: res['avg3'],
          avg4: res['avg4'],
          avg5: res['avg5'],
          totavg: res['totavg'],
          voteh: res['voteh']+1,
          voten: res['voten'],
          ip: this.ipaddress,
          
        });
        document.getElementById("updatestock")?.click();
        this.getallUser();
      }
     
    });  
  } 
  }

  onUpdate(): any {
    this.api.updateItem(this.vontedataid, this.updateForm.value)
      .subscribe(() => {
      }, (err) => {
        console.log(err);
      });
  }


  setCurrentPagination() {
    document.getElementById("paginationValue")?.click();
    this.paginationLimit = Number(this.paginationLimit) + 40;
  }

  scrollBottom() {
    document.getElementById("scrollbottom")?.click();
    window.scrollTo(0, document.body.scrollHeight);
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

  showMoreItems() {
    this.paginationLimit = Number(this.paginationLimit) + 10;
  }
  showLessItems() {
    this.paginationLimit = Number(this.paginationLimit) - 10;
  }

  getReviewCount() {
    this.genderCount = { male: 0, female: 0, other: 0 };
    this.api.getFastcomet().subscribe((response) => {
      this.allUser = response;
      // this.i nvsum=this.allUser;
      this.allUser.forEach((row: any) => {
        if (row.id) {
          this.genderCount.male += row.id / this.totalRecords;
          // this.rating0 = this.genderCount.male;
          // this.user_comment = row.comment;
        }
        //  console.log(response);
      });
    });
  }



  nextEmployee(): void {
    // if (this.arrayIndex <= 10) {
    //   this.employeeToDisplay = this.employees[this.arrayIndex];
    //   this.arrayIndex++;
    // } else {
    //   this.employeeToDisplay = this.employees[0];
    //   this.arrayIndex = 1;
    // }

    this.genderCount = { male: 0, female: 0, other: 0 };
    this.api.getFastcomet().subscribe((response) => {
      this.allUser = response;
      // this.i nvsum=this.allUser;
      this.allUser.forEach((row: any) => {
        if (row.id) {
          this.genderCount.male += row.id / this.totalRecords;
          // this.rating0 = this.genderCount.male;
          // this.user_comment = row.comment;
        }
        //  console.log(response);
      });
    });
  }

  addProduct() {
    if (this.productForm.valid) {
      this.api.AddFastcomet(this.productForm.value).subscribe({
        next: (res) => {
          this.productForm.reset();
          this.modalService.dismissAll();
          document.getElementById("openModalButton")?.click();
          // this.reloadCurrentPage();
        },
        error: () => {
          alert("Error while adding the product");
        },
      });
    } else {
      this.validateAllFormFields(this.productForm); //{7}
    }

  }

  onSubmit(): any {
    if (this.productForm.valid) {
      this.api.AddFastcomet(this.productForm.value)
        .subscribe(() => {
          console.log('Data added successfully!')
          // this.productForm.reset();
        }, (err) => {
          console.log(err);
        });

    } else {
      this.validateAllFormFields(this.productForm);
    }
  }

  public user_comment: any;
  public ratingreview: any;
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

  commentapproved = "Yes";
  namecompany = "fastcomet";
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
  }

  getallUser() {
    this.api.getFastcomet().subscribe((response) => {
      this.employees = response;

      // this.comments = this.allUser.filter((product: { companyName: string }) => product.companyName === "fastcomet");
      // this.commentToDisplay = this.allUser;
      // this.getFriends();
      // this.getAllProducts();
    });
  }

  getUsers() {
    this.randomUser.getData().subscribe((data) => {
      this.data = data.results;
      this.totalRec = data.results.length;
    });
  }
  getFriends() {
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

    this.api.getFastcomet()
      .subscribe((response) => {
        this.allUser = response;

        this.allUser.forEach((row: any) => {
          if (row.companyName == "fastcomet") {
            this.allUser2 = this.allUser.filter(
              (product: { companyName: string }) =>
                product.companyName === "fastcomet"
            ).length;

            this.totalRecords = this.allUser.length;

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



          }
        });
      });
  }

  updateProduct2() { }
  avg() {
    /* this.average = (this.average*this.count + this.currentRating) / (this.count + 1);*/
    this.average1 = this.rating1 / 5;
    this.average2 = this.rating2 / 5;
    this.average3 = this.rating3 / 5;
    this.average4 = this.rating4 / 5;
    this.average5 = this.rating5 / 5;
    this.totalaverage =
      this.average1 +
      this.average2 +
      this.average3 +
      this.average4 +
      this.average5;
    /* this.count += 1;*/
  }
}
