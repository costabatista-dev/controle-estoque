import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Entity, Movement } from 'src/app/entity/Entities';

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
  dataTable:Entity[]=[];

  searchableTable:Entity[]=[];
  searchTerm:string="";

  constructor() {
  }

  ngOnInit(): void {
    this.searchableTable = this.dataTable;
  }

  onChangeNameFilter() {
    if (this.searchTerm.trim().length == 0) {
      this.searchableTable = this.dataTable;
    } else {
      let data:Entity[] = [];
      this.dataTable.forEach(element => {
        if (element.name.includes(this.searchTerm.trim()))
          data.push(element);
      });
      this.searchableTable = data;
    }
  }

  getMovement(movement: Entity): string {
    let mov:Movement = movement as Movement;
    switch(mov.type) {
        case 'E':
            return 'Entrada';
    }

    return '';
  }

}
