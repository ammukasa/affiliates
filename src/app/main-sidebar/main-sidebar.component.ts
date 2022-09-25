import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

//fastcomet
gofastcomet() {
  this.router.navigate(['reviews-fastcomet'])
  .then(() => {
    window.location.reload();
  });
  
}
//bluehost
gobluehost(){
  this.router.navigate(['reviews-bluehost'])
  .then(() => {
    window.location.reload();
  });
}

//dreamhost
godreamhost(){
  this.router.navigate(['reviews-dreamhost'])
  .then(() => {
    window.location.reload();
  });
}

//interserver
gointerserver(){
  this.router.navigate(['reviews-interserver'])
  .then(() => {
    window.location.reload();
  });
}

//hostarmada
gohostarmada(){
  this.router.navigate(['reviews-hostarmada'])
  .then(() => {
    window.location.reload();
  });
}

//godaddy
gogodaddy(){
  this.router.navigate(['reviews-godaddy'])
  .then(() => {
    window.location.reload();
  });
}

//hostgator
gohostgator(){
  this.router.navigate(['reviews-hostgator'])
  .then(() => {
    window.location.reload();
  });
}

//hostinger
gohostinger(){
  this.router.navigate(['reviews-hostinger'])
  .then(() => {
    window.location.reload();
  });
}

//a2hosting
goa2hosting(){
  this.router.navigate(['reviews-a2hosting'])
  .then(() => {
    window.location.reload();
  });
}

//bluehost
gocloudways(){
  this.router.navigate(['reviews-cloudways'])
  .then(() => {
    window.location.reload();
  });
}
}
