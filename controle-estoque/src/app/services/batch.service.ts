import { Injectable } from '@angular/core';
import { Batch, Entity } from '../entity/Entities';
import { Service } from './service';
import { HttpClient } from '@angular/common/http';
import { BATCH_SERVICE } from './ServiceConstants';

@Injectable({
  providedIn: 'root'
})
export class BatchService implements Service {

  constructor(private http: HttpClient) { }
  getAll(): Promise<Batch[]> {
    return this.http.get<Batch[]>(BATCH_SERVICE).toPromise() as Promise<Batch[]>;
  }

  getById(id: number): Promise<Entity> {
    return this.http.get<Batch>(BATCH_SERVICE + id).toPromise() as Promise<Batch>;
  }

  insert(batch: Batch): void {
    this.http.post<Batch>(BATCH_SERVICE, batch).toPromise();
  }

  update(batch: Batch): void {
    this.http.put<Batch>(BATCH_SERVICE + batch.id, batch).toPromise();
  }

  delete(id: number): void {
    this.http.delete<Batch>(BATCH_SERVICE + id).toPromise();
  }
}
