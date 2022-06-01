import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  name:string="";
  brands = [];
  departments = [];
  brandKeyword = "name";
  departmentKeyword = "name";

  constructor() {
    this.loadBrands();
    this.loadDepartments();
  }

  ngOnInit(): void {
  }

  changeName(): void {

  }

  loadBrands(): void {
    let localBrands = localStorage.getItem('brands');

    if (localBrands) {
      this.brands = JSON.parse(localBrands);
    } else {
      this.brands = [];
    }
  }

  loadDepartments(): void {
    let localDepartments = localStorage.getItem('departments');

    if (localDepartments) {
      this.departments = JSON.parse(localDepartments);
    } else {
      this.brands = [];
    }
  }

  selectBrand(item: Event): void {
    console.log(item);
  }

  selectDepartment(item: Event): void {
    console.log(item);
  }
}
