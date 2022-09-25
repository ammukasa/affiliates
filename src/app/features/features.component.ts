import { Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { NavItem } from './ui/model/nav-item';
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { Subscription } from 'rxjs';
import { menu } from './ui/model/menu';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnDestroy {

    // @ViewChild('sidenav') sidenav!: MatSidenav;

    // @Input() isExpanded!: boolean;
    // @Output() toggleMenu = new EventEmitter();
    
    public opened: boolean = true;
    public mediaWatcher: Subscription;
    public menu: NavItem[] = menu;
    
    constructor(public media: MediaObserver) {
        this.mediaWatcher = this.media.media$.subscribe((mediaChange: MediaChange) => {
            this.handleMediaChange(mediaChange);
        })
    }

    public handleMediaChange(mediaChange: MediaChange) {
        if (this.media.isActive('lt-lg')) {
            this.opened = false;
        } 
        else {
            this.opened = true;
        }
    }

  
    ngOnDestroy() {
        this.mediaWatcher.unsubscribe();
    }

    ngOnInit(): void {

    }

   
}
