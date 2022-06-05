import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../entity/Entities';
import { Service } from './service';
import { PRODUCTS_SERVICE } from './ServiceConstants';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements Service {

  constructor(private http:HttpClient) { }

  getAll(): Promise<Product[]> {
    return this.http.get<Product[]>(PRODUCTS_SERVICE).toPromise() as Promise<Product[]>;
  }

  getById(id: number): Promise<Product> {
    return this.http.get<Product>(PRODUCTS_SERVICE + id).toPromise() as Promise<Product>;
  }

  insert(product: Product): void {
    console.log(product);
    this.http.post<Product>(PRODUCTS_SERVICE, product).toPromise();
  }

  update(product: Product): void {
    console.log(product);
    this.http.put<Product>(PRODUCTS_SERVICE + product.id, product).toPromise();
  }

  delete(id: number): void {
    this.http.delete<Product>(PRODUCTS_SERVICE + id).toPromise();
  }
}
