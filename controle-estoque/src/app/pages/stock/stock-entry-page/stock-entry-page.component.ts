import { Component, OnInit } from '@angular/core';
import { Product, Location, Batch, Entity } from 'src/app/entity/Entities';
import { BatchService } from 'src/app/services/batch.service';
import { LocationService } from 'src/app/services/location.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-stock-entry-page',
  templateUrl: './stock-entry-page.component.html',
  styleUrls: ['./stock-entry-page.component.css']
})
export class StockEntryPageComponent implements OnInit {
  products:Product[]=[];
  locations:Location[]=[];
  batches:Batch[]=[];
  isProductsLoaded:boolean=false;
  isLocationsLoaded:boolean=false;
  isBatchesLoaded:boolean=false;
  productId:number=0;
  locationId:number=0;
  batchId:number=0;

  constructor(private productService:ProductService, private locationService: LocationService,
    private batchService:BatchService) {
    this.loadProducts();
    this.loadLocations();
    this.loadBatches();
  }

  loadProducts() {
    this.productService.getAll().subscribe((data:Product[]) => {
      this.products = data;
      this.isProductsLoaded = true;
    });
  }

  loadLocations() {
    this.locationService.getAll().subscribe((data:Location[]) => {
      this.locations = data;
      this.isLocationsLoaded = true;
    });
  }

  loadBatches() {
    this.batchService.getAll().subscribe((data:Batch[]) => {
      this.batches = data;
      this.isBatchesLoaded = true;
    });
  }

  setProduct(event:Entity) {
    this.productId = event.id;
  }

  setLocation(event:Entity) {
    this.locationId = event.id;
  }

  setBatch(event:Entity) {
    this.batchId = event.id;
  }

  saveEntry() {

  }

  ngOnInit(): void {

  }

}
