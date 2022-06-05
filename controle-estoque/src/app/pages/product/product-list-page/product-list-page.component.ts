import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent implements OnInit {
  products=[{'id':0, 'name':''}]

  constructor() {
    this.products = [];
  }

  findProducts(): [] {
    let localProducts = localStorage.getItem('products');
    if (localProducts)
      return JSON.parse(localProducts);
    return [];
  }

  ngOnInit(): void {
    this.products = this.findProducts();
  }

}
