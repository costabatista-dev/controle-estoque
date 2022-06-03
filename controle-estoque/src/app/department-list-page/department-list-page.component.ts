import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list-page',
  templateUrl: './department-list-page.component.html',
  styleUrls: ['./department-list-page.component.css']
})
export class DepartmentListPageComponent implements OnInit {
  departments=[{'id':0, 'name': ''}];

  constructor() {
    this.departments = [];
  }

  findDepartments(): [] {
    let localDepartments = localStorage.getItem('departments');
    if (localDepartments) {
      return JSON.parse(localDepartments);
    }
    return [];
  }

  ngOnInit(): void {
    this.departments = this.findDepartments();
  }

}
