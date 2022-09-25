import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router:Router) { }
 
  ngOnInit(): void {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

}


