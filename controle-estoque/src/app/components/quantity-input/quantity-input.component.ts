import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.css']
})
export class QuantityInputComponent implements OnInit {

  @Input()
  description:string="";

  @Input()
  invalidFeedback:string="";

  isValid:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

}
