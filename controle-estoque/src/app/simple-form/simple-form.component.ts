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
  id: number = 0;
  data = [{'id': 0, 'name': ''}];

  @Input()
  tableTitle: string = "";

  @Input()
  listId: string = "";

  constructor() {
    this.data = [];
  }

  ngOnInit(): void {
    let dataStorage = localStorage.getItem(this.listId);
    if (dataStorage) {
      this.data = JSON.parse(dataStorage);
    }
  }

  changeName() {
    this.onChangeName.emit({'name': this.name});
  }

  changeTableData() {
    this.onChangeTable.emit(this.data);
  }

  save() {
    if (this.id == 0) {
      if (this.data.length == 0)
        this.data.push({'id': 1, 'name': this.name.trim()});
      else
        this.data.push({
          'id': this.data[this.data.length - 1].id + 1,
          'name': this.name.trim()
        })

    } else {
      let index = this.data.map(x => {return x.id}).indexOf(this.id);
      this.data[index].name = this.name.trim();
    }

    localStorage.setItem(this.listId, JSON.stringify(this.data));
    this.clearNameField();
    this.id = 0;
  }

  edit(id:number, name:string) {
    this.id = id;
    this.name = name;
  }

  delete(id:number) {
    this.data = this.data.filter(function(element) {
      return element.id != id;
    })

    localStorage.setItem(this.listId, JSON.stringify(this.data));
  }

  cancel() {
    this.id = 0;
    this.name = "";
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
