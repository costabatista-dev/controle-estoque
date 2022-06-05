import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand  } from '../entity/Entities';
import { Service } from './service';
import { BRAND_SERVICE } from './ServiceConstants';

@Injectable({
  providedIn: 'root'
})
export class BrandService implements Service {

  constructor(private http: HttpClient) { }

  getAll(): Promise<Brand[]>  {
    return this.http.get<Brand[]>(BRAND_SERVICE).toPromise() as Promise<Brand[]>;
  }

  getById(id: number): Promise<Brand> {
    return this.http.get<Brand>(BRAND_SERVICE + id).toPromise() as Promise<Brand>;
  }

  insert(brand:Brand): void {
    this.http.post<Brand>(BRAND_SERVICE, brand).toPromise();
  }

  update(brand:Brand): void {
    this.http.put<Brand>(BRAND_SERVICE + brand.id, brand).toPromise();
  }

  delete(id:number): void {
    this.http.delete<Brand>(BRAND_SERVICE + id).toPromise();
  }
}
