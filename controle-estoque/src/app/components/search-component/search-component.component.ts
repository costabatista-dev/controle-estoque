import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Entity } from '../../entity/Entities';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  @Input()
  title:string="";

  @Input()
  data:Entity[]=[];

  @Input()
  notFoundMessage:string="";

  @Input()
  invalidFeedbackMessage:string="";

  @Input()
  placeholder:string="";

  @Output()
  selected:EventEmitter<Entity> = new EventEmitter();

  isValid:boolean=true;
  keyword:string="name";
  model:string="";

  constructor() { }

  ngOnInit(): void {
  }

  selectData(event:Entity) {
    this.selected.emit(event);
  }


}
