import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-list-page',
  templateUrl: './batch-list-page.component.html',
  styleUrls: ['./batch-list-page.component.css']
})
export class BatchListPageComponent implements OnInit {
  batches=[{'id':0, 'name': ''}]

  constructor() {
    this.batches = [];
  }

  ngOnInit(): void {
    this.batches = this.findBatches();
  }

  findBatches():[] {
    let localBatches = localStorage.getItem('batches');
    if (localBatches)
      return JSON.parse(localBatches);
    return [];
  }


}
