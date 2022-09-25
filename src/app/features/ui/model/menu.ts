import { NavItem } from './nav-item';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";


export let menu: NavItem[] = [
  {
    displayName: 'Home',
    iconName: 'dashboard',
    route: '../home'
  },
  {
    displayName: 'Reviews',
    iconName: 'supervised_user_circle',
    children: [
      {
        displayName: 'BlueHost ',
        iconName: 'rate_review',
        route: '../reviews-bluehost'
      },{
        displayName: 'DreamHost ',
        iconName: 'rate_review',
        route: '../reviews-dreamhost'
      },{
        displayName: 'FastComet ',
        iconName: 'rate_review',
        route: '../reviews-fastcomet'
      },{
        displayName: 'GoDaddy ',
        iconName: 'rate_review',
        route: '../reviews-godaddy'
      },{
        displayName: 'HostArmada ',
        iconName: 'rate_review',
        route: '../reviews-hostarmada'
      },{
        displayName: 'HostGator ',
        iconName: 'rate_review',
        route: '../reviews-hostgator'
      },{
        displayName: 'HosTinger ',
        iconName: 'rate_review',
        route: '../reviews-hostinger'
      },{
        displayName: 'HostPapa ',
        iconName: 'rate_review',
        route: '../reviews-hostpapa'
      },{
        displayName: 'interServer ',
        iconName: 'rate_review',
        route: '../reviews-interserver'
      },{
        displayName: 'IONOS Review',
        iconName: 'rate_review',
        route: '../reviews-ionos'
      },{
        displayName: 'menu',
        iconName: 'rate_review',
        route: '../menu'
      }
    ]
  }
];


