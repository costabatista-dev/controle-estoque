import { Component, OnInit } from '@angular/core';
import { DataLoaderService } from 'src/app/services/data-loader';
import { Batch } from '../../../entity/Entities';
import { BatchService } from '../../../services/batch.service';

@Component({
  selector: 'app-batch-list-page',
  templateUrl: './batch-list-page.component.html',
  styleUrls: ['./batch-list-page.component.css']
})
export class BatchListPageComponent extends DataLoaderService implements OnInit {
  batches:Batch[];


  constructor(private batchService: BatchService) {
    super(batchService);
    this.batches = [];
  }

  ngOnInit(): void {
    this.loadData();
  }

  public override getService(): BatchService {
    return this.batchService;
  }

  public override setDataSet(dataSet:Batch[]): void {
    this.batches = dataSet;
  }

  public override getDataSet(): Batch[] {
    return this.batches;
  }
}
