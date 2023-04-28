import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
 public primaryMenus=[
  {
    name: 'Home', 
    icon: '',
    subMenu: [],
    isOpen: false
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
  

 ];

 hideList: boolean = false;



 constructor() { }

  toggleList(primaryMenu: any): void {
    primaryMenu.isOpen = !primaryMenu.isOpen;
  }

 public secondaryMenus=["Settings", "Notifications", "Apps"];
 public subMenus=[];


}
