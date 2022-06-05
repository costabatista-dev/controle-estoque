import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from './entity/Entities';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private path = 'http://localhost:3000/brands';

  constructor(private http: HttpClient) { }

  getBrands(): Promise<Brand[]>  {
    return this.http.get<Brand[]>(this.path).toPromise() as Promise<Brand[]>;
  }
}
