import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/entity/Entities';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-list-page',
  templateUrl: './department-list-page.component.html',
  styleUrls: ['./department-list-page.component.css']
})
export class DepartmentListPageComponent implements OnInit {
  departments:Department[];
  isLoaded:boolean=false;

  constructor(private departmentService:DepartmentService) {
    this.departments = [];
  }

  findDepartments() {
    this.departmentService.getAll()
    .then((result:Department[]) => this.departments = result)
    .catch((err:Error) => this.departments = [])
    .finally(() => this.isLoaded = true);
  }

  ngOnInit(): void {
    this.findDepartments();
  }

}
