import { Injectable } from '@angular/core';
import { Batch, Entity } from '../entity/Entities';
import { Service } from './service';
import { HttpClient } from '@angular/common/http';
import * as ServiceConstants from './ServiceConstants';

@Injectable({
  providedIn: 'root'
})
export class BatchService implements Service {

  constructor(private http: HttpClient) { }
  getAll(): Promise<Batch[]> {
    return this.http.get<Batch[]>(ServiceConstants.BATCH_SERVICE).toPromise() as Promise<Batch[]>;
  }

  getById(id: number): Promise<Entity> {
    return this.http.get<Batch>(ServiceConstants.BATCH_SERVICE + '/' + id).toPromise() as Promise<Batch>;
  }

  insert(batch: Batch): void {
    this.http.post(ServiceConstants.BATCH_SERVICE, batch).subscribe();
  }

  update(batch: Batch): void {
    this.http.put(ServiceConstants.BATCH_SERVICE + '/' + batch.id, batch).subscribe();
  }

  delete(id: number): void {
    this.http.delete(ServiceConstants.BATCH_SERVICE + '/' + id).subscribe();
  }
}
