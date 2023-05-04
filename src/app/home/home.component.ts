import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public toggleform!: FormGroup;
  open:boolean = false;


  constructor(
    public fc: FormBuilder
  ){

  }
  ngOnInit(): void {
    this.toggleform= this.fc.group({
      show: [true],
      right:[true],
      top:[true],
    }) 
  }


  
}
