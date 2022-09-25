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

export interface PeriodicElement {
  name: string;
  position: string;
  storage: string;
  ram: string;
  symbol: string;
  os: string;
  link:string;
}

export interface PeriodicElement5 {
  name5: string;
  position5: string;
  storage5: string;
  ram5: string;
  symbol5: string;
  os5: string;
  link5:string;
}

export interface PeriodicElement6 {
  name5: string;
  position5: string;
  // storage5: string;
  ram5: string;
  // symbol5: string;
  // os5: string;
  link5:string;
}

export interface PeriodicElement7 {
  name5: string;
  position5: string;
  sites5: string;
  ram5: string;
  // symbol5: string;
  // os5: string;
  link5:string;
}

export interface PeriodicElement2 {
  name: string;
  position1: string;
  ram: string;
  symbol: string;
  os: string;
  link:string;
  storage:string;
}

export interface PeriodicElement22 {
  name: string;
  position1: string;
  ram: string;
  symbol: string;
  // os: string;
  link:string;
  storage:string;
}

export interface PeriodicElement0 {
  name: string;
  position0: string;
  storage: string;
  ram: string;
  symbol: string;
  os: string;
  link:string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: "Hatchling (Everything Unlimited)", name: 'Unlimited',ram:'Unlimited', storage: 'cPanel', symbol: '$2.75',os:'1',link:'https://www.interserver.net/vps/'},
  {position: "Baby (Everything Unlimited)", name: 'Unlimited',ram:'Unlimited', storage: 'cPanel', symbol: '$3.50',os:'Unlimited',link:'https://www.interserver.net/vps/'},
  {position: "Business (Everything Unlimited)", name: 'Unlimited', ram:'Unlimited',storage: 'cPanel', symbol: '$5.25',os:'Unlimited',link:'https://www.interserver.net/vps/'},
  {position: "Personal (Windows)", name: 'Unlimited',ram:'Unlimited', storage: 'cPanel', symbol: '$4.76',os:'1',link:'https://www.interserver.net/vps/'},
 
  {position: "Enterprise (Windows)", name: 'Unlimited',ram:'Unlimited', storage: 'cPanel', symbol: '$14.36',os:'5',link:'https://www.interserver.net/vps/'},
  {position: "Starter Plan", name: 'Unlimited',ram:'Unlimited', storage: 'cPanel', symbol: '$5.95',os:'1',link:'https://www.interserver.net/vps/'},
  {position: "Standard Plan", name: 'Unlimited', ram:'Unlimited',storage: 'cPanel', symbol: '$7.95',os:'2',link:'https://www.interserver.net/vps/'},
  {position: "Business Plan", name: 'Unlimited',ram:'Unlimited', storage: 'cPanel', symbol: '$9.95',os:'3',link:'https://www.interserver.net/vps/'},
];

const ELEMENT_DATA2: PeriodicElement[] = [
  {position: "Snappy 2000", name: '120GB',ram:'2 Cores', storage: '2 GB', symbol: '$19.95',os:'',link:'https://www.interserver.net/vps/windows-vps.html'},
  {position: "Snappy 4000", name: '165GB',ram:'2 Cores', storage: '4 GB', symbol: '$29.95',os:'',link:'https://www.interserver.net/vps/windows-vps.html'},
  {position: "Snappy 8000", name: '240GB', ram:'4 Cores',storage: '8 GB', symbol: '$39.95',os:'',link:'https://www.interserver.net/vps/windows-vps.html'},
  ];

const ELEMENT_DATA3: PeriodicElement0[] = [
  {position0: "Value Server", name: '1 TB',ram:'4 cores', storage: '8 GB', symbol: '$89.98',os:'Unlimited',link:'https://www.interserver.net/vps/storage.html'},
  {position0: "Power Server", name: '512 GB',ram:'8 cores', storage: '16 GB', symbol: '$119.89',os:'Unlimited',link:'https://www.interserver.net/vps/storage.html'},
  {position0: "Enterprise Server", name: '1 TB', ram:'8 cores',storage: '30 GB', symbol: '$139.99',os:'Unlimited',link:'https://www.interserver.net/vps/storage.html'},
 ];

const ELEMENT_DATA4: PeriodicElement2[] = [
  {position1: "Hatchling Cloud",name: 'Unlimited',ram:'2 cores', storage: '2GB',   symbol: '$4.95',os:'Unlimited',link:'https://www.interserver.net/dedicated/10gbps.html'},
  {position1: "Baby Cloud",name: 'Unlimited', ram:'4 cores',storage: '4GB', symbol: '$6.57',os:'Unlimited',link:'https://www.interserver.net/dedicated/10gbps.html'},
  {position1: "Business Cloud",name: 'Unlimited',ram:'6 cores', storage: '6GB',  symbol: '$9.95',os:'Unlimited',link:'https://www.interserver.net/dedicated/10gbps.html'},
  
];

const ELEMENT_DATA5: PeriodicElement6[] = [
  {position5: "Express Start",     name5: 'Unlimited',ram5:'$3.84',link5:'https://www.interserver.net/webhosting/reseller-hosting.html'},
  {position5: "Express Site",      name5: 'Unlimited',ram5:'$5.99',link5:'https://www.interserver.net/webhosting/reseller-hosting.html'},
  {position5: "Express Store",   name5: 'Unlimited', ram5:'$9.22',link5:'https://www.interserver.net/webhosting/reseller-hosting.html'},
];

const ELEMENT_DATA6: PeriodicElement7[] = [
  {position5: "STARTUP",    sites5: '1', name5: 'Unlimited',ram5:'$2.99',link5:'https://www.interserver.net/webhosting/reseller-hosting.html'},
  {position5: "DRIVE",     sites5: 'Unlimited', name5: 'Unlimited',ram5:'$5.99',link5:'https://www.interserver.net/webhosting/reseller-hosting.html'},
  {position5: "TURBO BOOST",  sites5: 'Unlimited', name5: 'Unlimited', ram5:'$6.99',link5:'https://www.interserver.net/webhosting/reseller-hosting.html'},
  {position5: "TURBO MAX",sites5: 'Unlimited', name5: 'Unlimited',ram5:'$12.99',link5:'https://www.interserver.net/webhosting/reseller-hosting.html'},
  
];
const ELEMENT_DATA7: PeriodicElement22[] = [
  {position1: "Aluminum Plan",name: '60  GB',ram:'599.96 GB', storage: 'cPanel',   symbol: '$19.95',link:'https://www.interserver.net/dedicated/10gbps.html'},
  {position1: "Copper Plan",name: '90  GB', ram:'899.99 GB',storage: 'cPanel', symbol: '$24.95',link:'https://www.interserver.net/dedicated/10gbps.html'},
  {position1: "Silver plan",name: '140  GB',ram:'1.4 TB', storage: 'cPanel',  symbol: '$24.95',link:'https://www.interserver.net/dedicated/10gbps.html'},
  ];
const ELEMENT_DATA8: PeriodicElement7[] = [
  {position5: "Basic SSL DV",    sites5: 'Domain Validated + more', name5: '$10,000.00',ram5:'$49.99',link5:'https://www.interserver.net/webhosting/reseller-hosting.html'},
  {position5: "Premium SSL OV",     sites5: 'Basic Encryption + more', name5: '$10,000.00',ram5:'$179.99',link5:'https://www.interserver.net/webhosting/reseller-hosting.html'},
  {position5: "Premium SSL OV",  sites5: 'Better Support + more', name5: '$1,250,000.00', ram5:'$179.00',link5:'https://www.interserver.net/webhosting/reseller-hosting.html'},
  {position5: "Advanced SSL",sites5: 'Highest Warranties + more', name5: '$1,500,000.00',ram5:'$929.00',link5:'https://www.interserver.net/webhosting/reseller-hosting.html'},
  // {position5: "DIRECT ADMIN",                   name5: 'Yes',ram5:'Yes', storage5: 'Yes', symbol5: 'Yes',os5:'Yes',link5:'https://www.interserver.net/webhosting/reseller-hosting.html'},
  // {position5: "CLIENT MANAGEMENT",              name5: 'Yes',ram5:'Yes', storage5: 'Yes', symbol5: 'Yes',os5:'Yes',link5:'https://www.interserver.net/webhosting/reseller-hosting.html'},
  // {position5: "SETUP FEE(S)",                   name5: '$0.00',ram5:'$0.00', storage5: '$0.00', symbol5: '$0.00',os5:'$0.00',link5:'https://www.interserver.net/webhosting/reseller-hosting.html'},
  // {position5: "MONTHLY PRICING",                name5: '$19.95',ram5:'$29.95',storage5: '$39.95', symbol5: '$49.95',os5:'$59.95',link5:'https://www.interserver.net/webhosting/reseller-hosting.html'},
 
];

@Component({
  selector: "app-about",

  templateUrl: "./reviews-hostgator.component.html",
  styleUrls: ["./reviews-hostgator.component.css"],
  providers: [DatePipe]
})


export class AboutComponenthostgator implements OnInit, AfterViewChecked, ElementRef {
  todayDate: Date = new Date();
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  // table
  displayedColumns: string[] = ['position', 'name', 'ram','storage', 'symbol','os','button'];
  displayedColumns1: string[] = ['position', 'name', 'ram','storage', 'symbol','button'];
  // displayedColumns5: string[] = ['position5', 'name5', 'ram5','storage5', 'symbol5','os5','button5'];
  displayedColumns6: string[] = ['position', 'name', 'ram','symbol','button'];
  displayedColumns7: string[] = ['position', 'name', 'ram','storage','symbol','button'];
  // displayedColumns2: string[] = ['position1', 'name', 'ram', 'symbol','button'];
  dataSource = ELEMENT_DATA;
  dataSource2 = ELEMENT_DATA2;
  dataSource3 = ELEMENT_DATA3;
  dataSource4 = ELEMENT_DATA4;
  dataSource5 = ELEMENT_DATA5;
  dataSource6 = ELEMENT_DATA6;
  dataSource7 = ELEMENT_DATA7;
  dataSource8 = ELEMENT_DATA8;
  // end table
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

  // dataSource!: MatTableDataSource<any>;

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
      commentApproved: ["No"],
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
      commentApproved: ["No"],
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
    this.api.getHostgator().subscribe({
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
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

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
    this.api.GetItemhostgator(this.vontedataid).subscribe(res => {
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
    this.api.updateItemhostgator(this.vontedataid, this.updateForm.value)
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
    this.api.getHostgator().subscribe((response) => {
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
    this.api.getHostgator().subscribe((response) => {
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
      this.api.AddHostgator(this.productForm.value).subscribe({
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
      this.api.AddHostgator(this.productForm.value)
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

  commentapproved = "No";
  namecompany = "hostgator";
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
    this.api.getHostgator().subscribe((response) => {
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

    this.api.getHostgator()
      .subscribe((response) => {
        this.allUser = response;

        this.allUser.forEach((row: any) => {
          if (row.companyName == "hostgator") {
            this.allUser2 = this.allUser.filter(
              (product: { companyName: string }) =>
                product.companyName === "hostgator"
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
