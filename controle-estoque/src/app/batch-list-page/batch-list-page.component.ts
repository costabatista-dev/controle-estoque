import { Component, OnInit } from '@angular/core';
import { Batch } from '../entity/Entities';
import { BatchService } from '../services/batch.service';

@Component({
  selector: 'app-batch-list-page',
  templateUrl: './batch-list-page.component.html',
  styleUrls: ['./batch-list-page.component.css']
})
export class BatchListPageComponent implements OnInit {
  batches:Batch[];
  isLoaded:boolean=false;

  constructor(private batchService: BatchService) {
    this.batches = [];
  }

  ngOnInit(): void {
    this.findBatches();
  }

  findBatches() {
    this.batchService.getAll().then((result:Batch[]) => {
      this.batches = result;
      this.isLoaded = true;
    }).catch((err:Error) => {
      this.batches = [];
      this.isLoaded = true;
    })
  }


}
