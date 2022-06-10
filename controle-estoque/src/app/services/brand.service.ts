import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand  } from '../entity/Entities';
import { Service } from './service';
import { BRAND_SERVICE } from './ServiceConstants';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService implements Service {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Brand[]>  {
    return this.http.get<Brand[]>(BRAND_SERVICE);
  }

  getById(id: number): Observable<Brand> {
    return this.http.get<Brand>(BRAND_SERVICE + id);
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
