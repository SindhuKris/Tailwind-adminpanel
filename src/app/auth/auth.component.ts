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
    subMenu: []
  },
  {
    name:'Dashboard',
    icon:'',
    subMenu: []
  },
  {
    name:'Content',
    icon:'',
    subMenu: ['Courses', 'Categories', 'Instructors', 'Video Library']
  },
  {
    name:'Design',
    icon:'',
    subMenu: ['Black Design', 'Light Design', 'Material Design', 'Soft Design']
  },
  {
    name:'Market & Sell',
    icon:'',
    subMenu: ['Marketing', 'Sales', 'Service', 'Operations']
  },
  {
    name:'Reporting',
    icon:'',
    subMenu: ['Sales Overview', 'Sales Pipeline', 'Sales Trend with Forecast', 'Sales Target']
  },
  {
    name:'Support',
    icon:'',
    subMenu: ['About Us', 'Contact Us', 'Customer Support']
  },
  

 ];
 hideList: boolean = false;

 constructor() { }

  toggleList(): void {
    this.hideList = !this.hideList;
  }

 public secondaryMenus=["Settings", "Notifications", "Apps"];
 public subMenus=[];


}
