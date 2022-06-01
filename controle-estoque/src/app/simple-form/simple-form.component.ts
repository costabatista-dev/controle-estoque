import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  @Output()
  onChangeName = new EventEmitter();

  @Output()
  onChangeTable = new EventEmitter();

  name: string = "";
  data = [{'id': 0, 'name': ''}];

  @Input()
  tableTitle: string = "";

  @Input()
  listId: string = "";

  constructor() {
    this.data = [];
    let dataStorage = localStorage.getItem(this.listId);
    if (dataStorage) {
      this.data = JSON.parse(dataStorage);
    }
  }

  ngOnInit(): void {
  }

  changeName() {
    this.onChangeName.emit({'name': this.name});
  }

  changeTableData() {
    this.onChangeTable.emit(this.data);
  }

  save() {
    this.data.push({'id': this.data.length + 1, 'name': this.name});
    localStorage.setItem(this.listId, JSON.stringify(this.data));
    this.clearNameField();
  }

  disableSave() {
    return this.name.trim().length == 0;
  }

  disableClear() {
    return this.name.trim().length == 0;
  }

  clearNameField() {
    this.name = "";
  }

}
