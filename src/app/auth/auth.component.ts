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
    subMenu: [{name:'Courses'}, {name:'Categories'}, {name:'Instructors'}, {name:'Video Library'}],
    isOpen: false
  },
  {
    name:'Design',
    icon:'',
    subMenu: [{name:'Black Design'}, {name:'Light Design'}, {name:'Material Design'},{name: 'Soft Design'}],
    isOpen: true
  },
  {
    name:'Market & Sell',
    icon:'',
    subMenu: [{name:'Marketing'}, {name:'Sales'}, {name:'Service'},{name: 'Operations'}],
    isOpen:false
  },
  {
    name:'Reporting',
    icon:'',
    subMenu: [{name:'Sales Overview'}, {name:'Sales Pipeline'},{name:'Sales Trend with Forecast'},{name: 'Sales Target'}],
    isOpen:false
  },
  {
    name:'Support',
    icon:'',
    subMenu: [{name:'About Us'},{name: 'Contact Us'},{name:'Customer Support'}],
    isOpen:false
  },
  {
    name:'Auth Layout',
    icon:'',
    subMenu: [{name:'Register', router:'/register'}, {name:'Login', router:'/login' }],
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
