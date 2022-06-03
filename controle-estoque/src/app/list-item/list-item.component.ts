import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  tableTitle:string="";

  @Input()
  dataStorage:string="";

  @Input()
  dataTable=[{'id':0,'name':''}];

  constructor() {
    this.dataTable.pop();
  }

  ngOnInit(): void {

  }

}
