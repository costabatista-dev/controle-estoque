import { Component, OnInit } from '@angular/core';
import { TRANSFER } from 'src/app/constants/movement-constants';
import { Batch, Entity, Location, Movement, Product, Quantity } from 'src/app/entity/Entities';
import BatchService from 'src/app/services/batch/batch.service';
import LocationService from 'src/app/services/location/location.service';
import MovementService from 'src/app/services/movement/movement.service';
import ProductService from 'src/app/services/product/product.service';

@Component({
    selector: 'app-stock-transfer-page',
    templateUrl: './stock-transfer-page.component.html',
    styleUrls: ['./stock-transfer-page.component.css']
})
export class StockTransferPageComponent implements OnInit {
    products: Product[] = [];
    productModel: Product | undefined;
    productId: number = 0;
    isProductsLoaded: boolean = false;
    batches: Batch[] = [];
    batchModel: Batch | undefined;
    batchId: number = 0;
    isBatchesLoaded: boolean = false;
    locations: Location[] = [];
    locationFromModel: Location | undefined;
    locationFromId: number = 0;
    isLocationsLoaded: boolean = false;
    locationToModel: Location | undefined;
    locationToId: number = 0;
    quantityModel: string = '';
    quantity: number = 0;


    constructor(private productService: ProductService, private locationService: LocationService,
        private batchService: BatchService, private movementService: MovementService) {
        this.loadProducts();
        this.loadBatches();
        this.loadLocations();
    }

    loadProducts(): void {
        this.productService.getAll().subscribe((data: Product[]) => {
            this.products = data;
            this.isProductsLoaded = true;
        });
    }

    loadBatches() {
        this.batchService.getAll().subscribe((data: Batch[]) => {
            this.batches = data;
            this.isBatchesLoaded = true;
        });
    }

    loadLocations() {
        this.locationService.getAll().subscribe((data: Location[]) => {
            this.locations = data;
            this.isLocationsLoaded = true;
        });
    }

    setProduct(event: Entity): void {
        this.productId = event.id;
    }

    setBatch(event: Entity): void {
        this.batchId = event.id;
    }

    setFromLocation(event: Entity): void {
        this.locationFromId = event.id;
    }

    setToLocation(event: Entity): void {
        this.locationToId = event.id;
    }

    changeQuantity(event: Quantity): void {
        this.quantity = event.value;
    }

    isValidMovement(): boolean {
        return true;
    }

    saveTransfer(): void {
        if (confirm('Deseja salvar a movimentação de transferência?')) {
            if (this.isValidMovement() && this.productModel && this.locationToModel && this.locationFromModel && this.batchModel) {
                let movement: Movement = new Movement(this.productId, this.batchId, TRANSFER, this.quantity);
                movement.name = this.productModel.name;
                movement.locationFrom = this.locationFromId;
                movement.locationFromName = this.locationFromModel.name;
                movement.locationTo = this.locationToId;
                movement.locationToName = this.locationToModel.name;
                movement.batchName = this.batchModel.name;

                this.movementService.insert(movement);
                this.clearFields();
            }
        }
    }

    clearFields() {
        this.locationFromModel = undefined;
        this.locationFromId = 0;
        this.productModel = undefined;
        this.productId = 0;
        this.locationToModel = undefined;
        this.locationToId = 0;
        this.batchModel = undefined;
        this.batchId = 0;
        this.quantityModel = '';
        this.quantity = 0;
    }

    ngOnInit(): void {
    }

}
