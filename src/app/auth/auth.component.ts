import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
 public primaryMenus = [
  {
    name: 'home', 
    icon: '',
    subMenu: [],
    isOpen: false,
    router:'/home'

  },
  {
    name:'Dashboard',
    icon:'',
    subMenu: [],
    isOpen: false
  },
  {
    name:'Content',
    icon:'',
    subMenu: ['Courses', 'Categories', 'Instructors', 'Video Library'],
    isOpen: false
  },
  {
    name:'Design',
    icon:'',
    subMenu: ['Black Design', 'Light Design', 'Material Design', 'Soft Design'],
    isOpen: true
  },
  {
    name:'Market & Sell',
    icon:'',
    subMenu: ['Marketing', 'Sales', 'Service', 'Operations'],
    isOpen:false
  },
  {
    name:'Reporting',
    icon:'',
    subMenu: ['Sales Overview', 'Sales Pipeline', 'Sales Trend with Forecast', 'Sales Target'],
    isOpen:false
  },
  {
    name:'Support',
    icon:'',
    subMenu: ['About Us', 'Contact Us', 'Customer Support'],
    isOpen:false
  },
  {
    name:'Auth Layout',
    icon:'',
    subMenu: ['Register', 'Login'],
    isOpen:false,
  },
  
  

 ];

 hideList:boolean = false;

 open:boolean = false;


 constructor(){

  }

  toggleList(primaryMenu: any): void {
    primaryMenu.isOpen = !primaryMenu.isOpen;
  }
  
  toggleRightSidenav(){
    this.open =!this.open;
    console.log(1);
  }

 public secondaryMenus= ["Settings", "Notifications", "Apps"];
 public subMenus= [];


}
