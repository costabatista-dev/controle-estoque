import { Component, OnInit } from '@angular/core';
import { ENTRANCY } from 'src/app/constants/movement-constants';
import { Batch, Entity, Location, Movement, Product } from 'src/app/entity/Entities';
import BatchService  from "src/app/services/batch/batch.service";
import LocationService from 'src/app/services/location/location.service';
import MovementService from 'src/app/services/movement/movement.service';
import ProductService from 'src/app/services/product/product.service';

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
  quantity:number=0;

  constructor(private productService:ProductService, private locationService:LocationService,
    private batchService:BatchService, private movementService:MovementService) {
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

  changeQuantity(event:Event) {
      console.log(event);
      this.quantity = Number(event);
  }

  saveEntry() {
    let movement:Movement = new Movement(this.productId, this.batchId, ENTRANCY, this.quantity);
    movement.locationTo = this.locationId;
    this.movementService.insert(movement);
  }

  ngOnInit(): void {

  }

}
