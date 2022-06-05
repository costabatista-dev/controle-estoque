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

  searchableTable=[{'id':0,'name':''}];
  searchTerm:string="";

  constructor() {
    this.dataTable.pop();
  }

  ngOnInit(): void {
    this.searchableTable = this.dataTable;
  }

  onChangeNameFilter() {
    console.log('auiq')
    if (this.searchTerm.trim().length == 0) {
      this.searchableTable = this.dataTable;
    } else {
      let data = [{'id':0, 'name': ''}];
      data = [];
      this.dataTable.forEach(element => {
        if (element.name.includes(this.searchTerm.trim()))
          data.push(element);
      });
      this.searchableTable = data;
      console.log(this.searchableTable);
    }
  }

}
