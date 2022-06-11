import { Injectable } from '@angular/core';
import { Batch, Entity } from '../entity/Entities';
import { Service } from './service';
import { HttpClient } from '@angular/common/http';
import { BATCH_SERVICE, OBSERVABLE_ERROR_HANDLER } from '../constants/ServiceConstants';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatchService implements Service {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Batch[]> {
    return this.http.get<Batch[]>(BATCH_SERVICE)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER));
  }

  getById(id: number): Observable<Entity> {
    return this.http.get<Batch>(BATCH_SERVICE + id)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER));
  }

  insert(batch: Batch): void {
    this.http.post<Batch>(BATCH_SERVICE, batch)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
    .subscribe();
  }

  update(batch: Batch): void {
    this.http.put<Batch>(BATCH_SERVICE + batch.id, batch)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
    .subscribe();
  }

  delete(id: number): void {
    this.http.delete<Batch>(BATCH_SERVICE + id)
      .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
      .subscribe();
  }
}
