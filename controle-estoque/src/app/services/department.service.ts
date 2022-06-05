import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../entity/Entities';
import { Service } from './service';
import { DEPARTMENT_SERVICE } from './ServiceConstants';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService implements Service{

  constructor(private http: HttpClient) { }

  getAll(): Promise<Department[]> {
    return this.http.get<Department[]>(DEPARTMENT_SERVICE).toPromise() as Promise<Department[]>;
  }

  getById(id: number): Promise<Department> {
    return this.http.get<Department>(DEPARTMENT_SERVICE + id).toPromise() as Promise<Department>;
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
