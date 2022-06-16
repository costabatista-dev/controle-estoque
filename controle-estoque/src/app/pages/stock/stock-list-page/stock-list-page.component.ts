import { Component, OnInit } from '@angular/core';
import { ENTRANCY, OUT } from 'src/app/constants/movement-constants';
import { Movement, Product, Stock } from 'src/app/entity/Entities';
import MovementService from 'src/app/services/movement/movement.service';
import ProductService from 'src/app/services/product/product.service';
import { StockOutPageComponent } from '../stock-out-page/stock-out-page.component';

@Component({
    selector: 'app-stock-list-page',
    templateUrl: './stock-list-page.component.html',
    styleUrls: ['./stock-list-page.component.css']
})
export class StockListPageComponent implements OnInit {
    stockList: Stock[] = [];
    products: Product[] = [];
    movements: Movement[] = [];
    isLoaded: boolean = false;

    constructor(private productService: ProductService, private movementService: MovementService) {
        this.loadStock();
    }

    loadStock(): void {
        this.productService.getAll().subscribe((dataProducts: Product[]) => {
            this.products = dataProducts;
            this.movementService.getAll().subscribe((dataMovements: Movement[]) => {
                this.movements = dataMovements;
                this.createStockList();
                this.isLoaded = true;
            })
        })
    }

    createStockList(): void {
        this.products.forEach((product: Product) => {
            let stock: Stock = new Stock(product.id, product.name);
            stock.unityValue = product.price;
            stock.quantity = this.getProductQuantity(product.id);
            stock.totalValue = stock.unityValue * stock.quantity;
            this.stockList.push(stock);
        })
    }

    getProductQuantity(productId: number): number {
        let quantity: number = 0;
        this.movements.forEach((movement: Movement) => {
            if (movement.product === productId) {
                if (movement.type === ENTRANCY)
                    quantity += movement.quantity;
                if (movement.type === OUT) {
                    quantity -= movement.quantity;
                }
            }
        });
        return quantity;
    }


    ngOnInit(): void {
    }

}
