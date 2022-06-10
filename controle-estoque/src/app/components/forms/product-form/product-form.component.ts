import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand, Department, Product } from 'src/app/entity/Entities';
import { BrandService } from 'src/app/services/brand.service';
import { DepartmentService } from 'src/app/services/department.service';
import { ProductService } from 'src/app/services/product.service';

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
  brands: Brand[] = [];
  departments: Department[] = [];
  brandKeyword = "name";
  departmentKeyword = "name";
  product: Product = new Product(0, '');
  departmentModel: string = "";
  brandModel: string = "";
  isValidName: boolean = true;
  isValidBrand: boolean = true;
  isValidDepartment: boolean = true;
  isValidPrice: boolean = true;

  constructor(private route: ActivatedRoute, private brandService: BrandService,
    private departmentService: DepartmentService, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.brandService.getAll()
      .subscribe((result: Brand[]) => {
        this.brands = result
        this.departmentService.getAll()
          .subscribe((result: Department[]) => {
            this.departments = result
            let id = this.route.snapshot.params['id'];
            if (id && id != 0) {
              this.productService.getById(Number(id))
                .subscribe((result: Product) => {
                  this.id = result.id;
                  this.name = result.name;
                  this.description = result.description;
                  this.brand = result.brand;
                  this.department = result.department;
                  this.price = result.price.toString();

                  let brandIndex = this.brands.map(x => { return x.id }).indexOf(this.brand);
                  this.brandModel = this.brands[brandIndex].name;

                  let departmentIndex = this.departments.map(x => { return x.id }).indexOf(this.department);
                  this.departmentModel = this.departments[departmentIndex].name;
                })
            }
          })
      })
  }


  selectBrand(brand: Brand): void {
    this.brand = brand.id;
    this.brandModel = brand.name;
  }

  selectDepartment(department: Department): void {
    this.department = department.id;
    this.departmentModel = department.name;
  }

  createId(): Promise<number> {
    return new Promise((resolve, reject) => {
      if (this.id == 0) {
        this.productService.getAll()
          .subscribe((result: Product[]) => {
            let products = result;
            if (products.length > 0) {
              let lastIndex = products.length - 1;
              let lastId = products[lastIndex].id + 1;
              this.id = lastId;
            } else {
              this.id = 1;
            }
            resolve(this.id);
          });
      }
    });
  }

  createProduct() {
    this.product = new Product(this.id, this.name.trim());
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

    if (confirm('Deseja salvar o produto ?')) {
      if (this.id != 0) {
        this.createProduct();
        this.productService.update(this.product);
      } else {
        this.createProduct();
        this.productService.insert(this.product);
      }
      this.clearFields();
      this.id = 0;
    }
  }

  clearFields(): void {
    this.name = '';
    this.description = '';
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
    return (this.name.trim().length == 0 || this.price.trim().length == 0);
  }

  disableDelete(): boolean {
    return (this.id == 0);
  }

  delete() {
    let text = "Deseja excluir o produto?";
    if (confirm(text)) {
      this.productService.delete(this.id);
    }
  }

}
