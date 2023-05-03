import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  open:boolean = false;


  toggleShow(){
    this.open =!this.open;
  }

  
}
