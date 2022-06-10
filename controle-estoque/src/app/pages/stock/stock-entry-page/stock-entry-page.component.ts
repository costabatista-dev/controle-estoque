import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entity/Entities';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-stock-entry-page',
  templateUrl: './stock-entry-page.component.html',
  styleUrls: ['./stock-entry-page.component.css']
})
export class StockEntryPageComponent implements OnInit {
  products:Product[]=[];
  isLoaded:boolean=false;

  constructor(private productService:ProductService) {
    this.productService.getAll().subscribe(data => {
      this.products = data;
      this.isLoaded = true;
    });
  }

  ngOnInit(): void {

  }

}
