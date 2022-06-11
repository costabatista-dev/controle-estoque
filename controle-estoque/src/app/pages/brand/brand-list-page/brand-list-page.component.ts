import { Component, OnInit } from '@angular/core';
import BrandService from 'src/app/services/brand/brand.service';
import { Brand, Entity } from 'src/app/entity/Entities';
import DataLoaderService from 'src/app/services/data-loader';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-brand-list-page',
  templateUrl: './brand-list-page.component.html',
  styleUrls: ['./brand-list-page.component.css']
})
export class BrandListPageComponent extends DataLoaderService implements OnInit {
  brands: Brand[];

  constructor(private brandService: BrandService) {
    super(brandService);
    this.brands = [];
  }

  ngOnInit(): void {
    this.loadData();
  }

  public override getService(): BrandService {
      return this.brandService;
  }


  public override setDataSet(dataSet:Brand[]): void {
    this.brands = dataSet;
  }

  public override getDataSet(): Brand[] {
      return this.brands;
  }
}
