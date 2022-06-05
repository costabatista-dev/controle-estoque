import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand,  } from '../entity/Entities';
import { Service } from './service';
import * as Constants from './ServiceConstants';

@Injectable({
  providedIn: 'root'
})
export class BrandService implements Service {

  constructor(private http: HttpClient) { }

  getAll(): Promise<Brand[]>  {
    return this.http.get<Brand[]>(Constants.BRAND_SERVICE).toPromise() as Promise<Brand[]>;
  }

  getById(id: number): Promise<Brand> {
    return this.http.get<Brand>(Constants.BRAND_SERVICE + '/' + id).toPromise() as Promise<Brand>;
  }

  insert(brand:Brand): void {
    this.http.post<Brand>(Constants.BRAND_SERVICE, brand).subscribe();
  }

  update(brand:Brand): void {
    this.http.put<Brand>(Constants.BRAND_SERVICE + '/' + brand.id, brand).subscribe();
  }

  delete(id:number): void {
    this.http.delete<Brand>(Constants.BRAND_SERVICE + '/' + id).subscribe();
  }


}
