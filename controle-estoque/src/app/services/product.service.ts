import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Product } from '../entity/Entities';
import { Service } from './service';
import { OBSERVABLE_ERROR_HANDLER, PRODUCTS_SERVICE } from '../constants/ServiceConstants';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements Service {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCTS_SERVICE)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER));
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(PRODUCTS_SERVICE + id)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER));
  }

  insert(product: Product): void {
    console.log(product);
    this.http.post<Product>(PRODUCTS_SERVICE, product)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
    .subscribe();
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
