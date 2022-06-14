import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Product, Sequence } from '../../entity/Entities';
import { Service } from '../service';
import { OBSERVABLE_ERROR_HANDLER, PRODUCTS_SERVICE, PRODUCT_SEQ_SERVICE } from '../../constants/ServiceConstants';
import { SequenceService } from 'src/app/sequence.service';

@Injectable({
    providedIn: 'root'
})
export default class ProductService implements Service {

    constructor(private http: HttpClient, private sequenceService: SequenceService) {
    }

    increaseSeq(): void {
        throw new Error('Method not implemented.');
    }

    nextSeq(): Observable<Sequence> {
        return this.http.get<Sequence>(PRODUCT_SEQ_SERVICE)
            .pipe(catchError(OBSERVABLE_ERROR_HANDLER));
    }

    getAll(): Observable<Product[]> {
        return this.http.get<Product[]>(PRODUCTS_SERVICE)
            .pipe(catchError(OBSERVABLE_ERROR_HANDLER));
    }

    getById(id: number): Observable<Product> {
        return this.http.get<Product>(PRODUCTS_SERVICE + id)
            .pipe(catchError(OBSERVABLE_ERROR_HANDLER));
    }

    insert(product: Product): void {
        this.sequenceService.sequenceServiceName = PRODUCT_SEQ_SERVICE;

        this.sequenceService.nextSeq().subscribe((sequence: Sequence) => {
            product.id = sequence.nextVal;

            this.http.post<Product>(PRODUCTS_SERVICE, product)
                .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
                .subscribe(() => {
                    this.sequenceService.increaseSeq();
                });
        })

    }

    update(product: Product): void {
        console.log(product);
        this.http.put<Product>(PRODUCTS_SERVICE + product.id, product)
            .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
            .subscribe();
    }

    delete(id: number): void {
        this.http.delete<Product>(PRODUCTS_SERVICE + id)
            .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
            .subscribe();
    }
}
