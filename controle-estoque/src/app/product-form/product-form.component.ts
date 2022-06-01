import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  name:string="";
  brands = [];
  brandKeyword = "name";

  constructor() {
    this.loadBrands();
    console.log(this.brands)
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

  selectBrand(item: Event): void {
    console.log(item);
  }
}
