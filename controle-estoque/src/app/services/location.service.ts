import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Location } from '../entity/Entities';
import { Service } from './service';
import { LOCATION_SERVICE, OBSERVABLE_ERROR_HANDLER } from '../constants/ServiceConstants';

@Injectable({
  providedIn: 'root'
})
export class LocationService implements Service {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Location[]> {
    return this.http.get<Location[]>(LOCATION_SERVICE)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER));
  }

  getById(id: number): Observable<Location> {
    return this.http.get<Location>(LOCATION_SERVICE + id)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER));
  }

  insert(location: Location): void {
    this.http.post<Location>(LOCATION_SERVICE, location)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
    .subscribe();
  }

  update(location: Location): void {
    this.http.put<Location>(LOCATION_SERVICE + location.id, location)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
    .subscribe();
  }

  delete(id: number): void {
    this.http.delete<Location>(LOCATION_SERVICE + id)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
    .subscribe();
  }
}
