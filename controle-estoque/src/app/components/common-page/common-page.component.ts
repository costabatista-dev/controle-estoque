import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrls: ['./common-page.component.css']
})
export class CommonPageComponent implements OnInit {

  @Input()
  title:string='';
  @Input()
  header:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
