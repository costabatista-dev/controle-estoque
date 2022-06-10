import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from './service';
import { Location } from '../entity/Entities';
import { LOCATION_SERVICE } from './ServiceConstants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService implements Service {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Location[]> {
    return this.http.get<Location[]>(LOCATION_SERVICE);
  }

  getById(id: number): Observable<Location> {
    return this.http.get<Location>(LOCATION_SERVICE + id);
  }

  insert(location: Location): void {
    this.http.post<Location>(LOCATION_SERVICE, location).toPromise();
  }

  update(location: Location): void {
    this.http.put<Location>(LOCATION_SERVICE + location.id, location).toPromise();
  }

  delete(id: number): void {
    this.http.delete<Location>(LOCATION_SERVICE + id).toPromise();
  }
}
