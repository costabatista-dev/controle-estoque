import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quantity } from 'src/app/entity/Entities';

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

  inputValue:string='';

  isValid:boolean=true;

  @Output()
  value:EventEmitter<Quantity> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeInputValue(value:string) {
      this.value.emit(new Quantity(Number(value)));
  }

}
