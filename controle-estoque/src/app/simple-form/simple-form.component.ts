import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  @Output()
  onChange = new EventEmitter();
  name: string = "";

  @Input()
  tableTitle: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  change() {
    this.onChange.emit(this.name);
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
