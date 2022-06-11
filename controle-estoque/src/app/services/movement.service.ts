import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from '../entity/Entities';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class MovementService implements Service {

  constructor() { }
  getAll(): Observable<Entity[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: number): Observable<Entity> {
    throw new Error('Method not implemented.');
  }
  insert(entity: Entity): void {
    throw new Error('Method not implemented.');
  }
  update(entity: Entity): void {
    throw new Error('Method not implemented.');
  }
  delete(id: number): void {
    throw new Error('Method not implemented.');
  }
}
