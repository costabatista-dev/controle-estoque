import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands-page',
  templateUrl: './brands-page.component.html',
  styleUrls: ['./brands-page.component.css']
})
export class BrandsPageComponent implements OnInit {

  name:string = "";
  brands=[{id:'', name:''}];

  constructor() {
  }

  ngOnInit(): void {
  }

  disableSave() {
    return this.name.trim().length == 0
  }

  clearNameField() {
    this.name = "";
  }

  save() {
    let key = localStorage.length + 1;
    localStorage.setItem(key.toString(), this.name);
    this.brands.push({'id': key.toString(), 'name': this.name});
    console.log(localStorage.getItem(key.toString()));
  }

}
