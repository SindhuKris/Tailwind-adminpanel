import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
 public primaryMenus=["Home","DashBoard", "Design", "Market&Sell", "Reporting", "Support"];

 public secondaryMenus=["Settings", "Notifications", "Apps"];
 public subMenus=["Courses", "Categories", "Instructors", "Video Library"]


}
