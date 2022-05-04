import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-entry',
  templateUrl: './menu-entry.component.html',
  styleUrls: ['./menu-entry.component.css']
})
export class MenuEntryComponent implements OnInit {
  @Input()
  title:string='';
  @Input()
  entries:string[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
