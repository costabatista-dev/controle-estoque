import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/entity/Entities';
import DataLoaderService from 'src/app/services/data-loader';
import DepartmentService from 'src/app/services/department/department.service';

@Component({
  selector: 'app-department-list-page',
  templateUrl: './department-list-page.component.html',
  styleUrls: ['./department-list-page.component.css']
})
export class DepartmentListPageComponent extends DataLoaderService implements OnInit {
  departments:Department[];


  constructor(private departmentService:DepartmentService) {
    super(departmentService);
    this.departments = [];
  }

  ngOnInit(): void {
    this.loadData();
  }

  public override getService(): DepartmentService {
    return this.departmentService;
  }

  public override setDataSet(dataSet:Department[]): void {
    this.departments = dataSet;
  }

  public override getDataSet(): Department[] {
    return this.departments;
  }

}
