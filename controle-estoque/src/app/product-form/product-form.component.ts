import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  id: number = 0;
  name: string = "";
  description: string = "";
  brand: number = 0;
  department: number = 0;
  price: string = '';
  brands = [{'id':0, 'name': ''}];
  departments = [{'id':0, 'name': ''}];
  brandKeyword = "name";
  departmentKeyword = "name";
  product = { "id": 0, "name": '', description: '', 'brand': 0, 'department': 0, 'price': 0 };
  departmentModel: string = "";
  brandModel: string = "";
  isValidName: boolean = true;
  isValidBrand: boolean = true;
  isValidDepartment: boolean = true;
  isValidPrice: boolean = true;

  constructor(private route: ActivatedRoute) {
    this.loadBrands();
    this.loadDepartments();
    let storage = localStorage.getItem('products');
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    let dataStorage = localStorage.getItem("products");
    if (dataStorage && id) {
      let data = [{ 'id': 0, 'name': '', 'description': '','brand': 0, 'department': 0, 'price': '' }];
      data = JSON.parse(dataStorage);
      id = Number(id);

      let index = data.map(x => { return x.id }).indexOf(id);
      let object = data[index];
      console.log(object);
      this.id = object.id;
      this.name = object.name;
      this.description = object.description;
      this.brand = object.brand;
      this.department = object.department;
      this.price = object.price.toString();

      let brandIndex = this.brands.map(x => {return x.id}).indexOf(this.brand);
      this.brandModel = this.brands[brandIndex].name;

      let departmentIndex = this.departments.map(x => {return x.id}).indexOf(this.department);
      console.log(this.departments[departmentIndex])
      this.departmentModel = this.departments[departmentIndex].name;
    }
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

  selectBrand(item: { 'id': 0, 'name': '' }): void {
    this.brand = item.id;
    this.brandModel = item.name;
  }

  selectDepartment(item: { 'id': 0, 'name': '' }): void {
    this.department = item.id;
    this.departmentModel = item.name;
  }

  createId(): void {
    if (this.id == 0) {
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
  }

  createProduct() {
    this.product.id = this.id;
    this.product.name = this.name.trim();
    this.product.description = this.description.trim();
    this.product.brand = this.brand;
    this.product.department = this.department;
    this.product.price = Number(this.price.replace(",", "."));
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

  validate(): boolean {
    this.validateName();
    this.validateBrand();
    this.validateDepartment();
    this.validatePrice();

    return this.isValidName && this.isValidBrand && this.isValidDepartment && this.isValidPrice;
  }

  save(): void {

    if (!this.validate()) {
      alert("Campos obrigatórios com valores inválidos!")
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
    this.isValidName = true;
    this.isValidBrand = true;
    this.isValidDepartment = true;
    this.isValidPrice = true;
  }

  disableSave(): boolean {
    return (this.name.trim().length == 0 || this.brandModel.trim().length == 0 ||
      this.departmentModel.trim().length == 0 || this.price.trim().length == 0);
  }

  disableClear(): boolean {
    return (this.name.length == 0 && this.brandModel.length == 0 &&
      this.departmentModel.length == 0 && this.price.length == 0 && this.description.length == 0);
  }

}
