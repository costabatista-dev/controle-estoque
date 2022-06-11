import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movement } from '../entity/Entities';
import { Service } from './service';
import { MOVEMENT_SERVICE, OBSERVABLE_ERROR_HANDLER } from '../constants/ServiceConstants';

@Injectable({
  providedIn: 'root'
})
export class MovementService implements Service {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Movement[]> {
    return this.http.get<Movement[]>(MOVEMENT_SERVICE)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER));
  }

  getById(id: number): Observable<Movement> {
    return this.http.get<Movement>(MOVEMENT_SERVICE + id)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER));
  }

  insert(movement: Movement): void {
    this.http.post<Movement>(MOVEMENT_SERVICE, movement)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
    .subscribe();
  }

  update(movement: Movement): void {
    this.http.put<Movement>(MOVEMENT_SERVICE + movement.id, movement)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
    .subscribe();
  }

  delete(id: number): void {
    this.http.delete<Movement>(MOVEMENT_SERVICE + id)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
    .subscribe();
  }
}
