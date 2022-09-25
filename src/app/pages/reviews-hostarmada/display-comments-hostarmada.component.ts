import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitorsService } from "./visitors.service";
import { Employee } from "src/app/model/employee.model";
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-display-comments',
  templateUrl: './display-comments-hostarmada.component.html',
  styleUrls: ['./display-comments-hostarmada.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayCommentsComponenthostarmada implements OnInit, OnChanges {

  showDiv = {
    previous: false,
    current: false,
    next: false
  }

  isShown: boolean = false; // hidden by default
  toggleShow() {
    this.isShown = !this.isShown;
  }

  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  private _employee!: Employee;
  private id: number = 0;
  allUser: any;
  ipaddress: string = '';
  employees: Employee[] = [];
  @Input() set employee(val: Employee) {
    this._employee = val;

  }

  get employee(): Employee { return this._employee; }

  constructor(private _route: ActivatedRoute, private _router: Router, private visitorsService: VisitorsService, private api: ApiService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.id = parseInt(params.get("id") || "");
    })

    this.visitorsService.getIpAddress().subscribe((res: any) => {
      this.ipaddress = res['ip'];
    });

  }

  scrollBottom() {
    document.getElementById("scrollbottom")?.click();
    window.scrollTo(0, document.body.scrollHeight);
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('' + color).slice(-6);
  }

  handleClick() {
    this.notify.emit(this.employee);
  }

  getInitials(string: string) {
    var names = string.split(' '),
      initials = names[0].substring(0, 1).toUpperCase();
    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };

  ngOnChanges(changes: SimpleChanges): void {
  }

}
