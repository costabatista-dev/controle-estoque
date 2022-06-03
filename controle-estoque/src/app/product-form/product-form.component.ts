import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  id:number=0;
  name:string="";
  description:string="";
  brand:number=0;
  department:number=0;
  price:string='';
  brands = [];
  departments = [];
  brandKeyword = "name";
  departmentKeyword = "name";
  product = {"id":0, "name":'', description: '', 'brand': 0, 'department': 0, 'price': 0};
  departmentModel:string="";
  brandModel:string="";
  isValidName: boolean=true;
  isValidBrand: boolean=true;
  isValidDepartment: boolean=true;
  isValidPrice: boolean=true;

  constructor() {
    this.loadBrands();
    this.loadDepartments();
    let storage = localStorage.getItem('products');
  }

  ngOnInit(): void {
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

  selectBrand(item:{'id':0, 'name':''}): void {
    this.brand = item.id;
    this.brandModel = item.name;
  }

  selectDepartment(item:{'id':0, 'name':''}): void {
    this.department = item.id;
    this.departmentModel = item.name;
  }

  createId(): void {
    let storage = localStorage.getItem("products");

    if (storage) {
      let products = JSON.parse(storage);
      let lastIndex = products.length - 1;
      let lastId = products[lastIndex].id + 1;
      this.id = lastId;
    } else {
      this.id = 1;
    }
  }

  createProduct() {
    this.product.id = this.id;
    this.product.name = this.name;
    this.product.description = this.description;
    this.product.brand = this.brand;
    this.product.department = this.department;
    this.product.price = Number(this.price.replace(",","."));
  }

  validateName(): boolean {
    this.isValidName = this.name.trim().length != 0;
    return this.isValidName;
  }

  validateBrand(): boolean {
    if (this.brand == 0) {
      this.isValidBrand = false;
      return false;
    }

    this.isValidBrand = true;
    return true;
  }

  validateDepartment(): boolean {
    if (this.department == 0) {
      this.isValidDepartment = false;
      return false;
    }

    this.isValidDepartment = true;
    return true;
  }

  validatePrice(): boolean {
    if (this.price.match(/(\d{1,3}(\.\d{3})*|\d+)(\,\d{2})?$/)) {
      this.isValidPrice = true;
      return true;
    }
    this.isValidPrice = false;
    return false;
  }

  save(): void {
    this.validateName();
    this.validateBrand();
    this.validateDepartment();
    this.validatePrice();
    if (!this.isValidName || !this.isValidBrand || !this.isValidDepartment || !this.isValidPrice) {
      alert("Campos obrigatórios não preenchidos!")
      return;
    }
    this.createId();
    this.createProduct();
    let storage = localStorage.getItem('products');
    if (storage) {
      let products = JSON.parse(storage);
      products.push(this.product);
      localStorage.setItem('products', JSON.stringify(products));
    } else {
      let products = [this.product];
      localStorage.setItem('products', JSON.stringify(products));
    }
    this.clearFields();
  }

  clearFields(): void {
    this.name = '';
    this.description = '';
    this.id = 0;
    this.brand = 0;
    this.department = 0;
    this.price = '';
    this.departmentModel = "";
    this.brandModel = "";
  }




}
