import { Injectable } from '@angular/core';
import { Batch, Entity } from '../entity/Entities';
import { Service } from './service';
import { HttpClient } from '@angular/common/http';
import { BATCH_SERVICE } from './ServiceConstants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatchService implements Service {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Batch[]> {
    return this.http.get<Batch[]>(BATCH_SERVICE);
  }

  getById(id: number): Observable<Entity> {
    return this.http.get<Batch>(BATCH_SERVICE + id);
  }

  insert(batch: Batch): void {
    this.http.post<Batch>(BATCH_SERVICE, batch).subscribe();
  }

  update(batch: Batch): void {
    this.http.put<Batch>(BATCH_SERVICE + batch.id, batch).subscribe();
  }

  delete(id: number): void {
    this.http.delete<Batch>(BATCH_SERVICE + id).subscribe();
  }
}
