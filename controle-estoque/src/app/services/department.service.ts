import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../entity/Entities';
import { Service } from './service';
import { DEPARTMENT_SERVICE } from './ServiceConstants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService implements Service{

  constructor(private http: HttpClient) { }

  getAll(): Observable<Department[]> {
    return this.http.get<Department[]>(DEPARTMENT_SERVICE);
  }

  getById(id: number): Observable<Department> {
    return this.http.get<Department>(DEPARTMENT_SERVICE + id);
  }

  insert(department: Department): void {
    this.http.post<Department>(DEPARTMENT_SERVICE, department).toPromise();
  }

  update(department: Department): void {
    this.http.put<Department>(DEPARTMENT_SERVICE + department.id, department).toPromise();
  }

  delete(id: number): void {
    this.http.delete<Department>(DEPARTMENT_SERVICE + id).toPromise();
  }
}
