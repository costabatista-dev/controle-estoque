import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entity/Entities';
import { DataLoaderService } from 'src/app/services/data-loader';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css']
})
export class ProductListPageComponent extends DataLoaderService implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {
    super(productService);
    this.products = [];
  }

  ngOnInit(): void {
    this.loadData();
  }

  public override getService(): ProductService {
    return this.productService;
  }

  public override setDataSet(dataSet:Product[]): void {
    this.products = dataSet;
  }

  public override getDataSet(): Product[] {
    return this.products;
  }

}
