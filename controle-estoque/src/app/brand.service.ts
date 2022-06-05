import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand, Entity } from './entity/Entities';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class BrandService implements Service {
  private path = 'http://localhost:3000/brands';

  constructor(private http: HttpClient) { }

  getAll(): Promise<Brand[]>  {
    return this.http.get<Brand[]>(this.path).toPromise() as Promise<Brand[]>;
  }

  getById(id: number): Promise<Brand> {
    return this.http.get<Brand>(this.path + '/' + id).toPromise() as Promise<Brand>;
  }

  insert(brand:Brand): void {
    this.http.post<Brand>(this.path, brand).subscribe();
  }

  update(brand:Brand): void {
    this.http.put<Brand>(this.path + '/' + brand.id, brand).subscribe();
  }

  delete(id:number): void {
    this.http.delete<Brand>(this.path + '/' + id).subscribe();
  }


}
