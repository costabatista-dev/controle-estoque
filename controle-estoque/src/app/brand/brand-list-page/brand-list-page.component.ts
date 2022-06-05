import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/brand.service';
import { Brand } from 'src/app/entity/Entities';

@Component({
  selector: 'app-brand-list-page',
  templateUrl: './brand-list-page.component.html',
  styleUrls: ['./brand-list-page.component.css']
})
export class BrandListPageComponent implements OnInit {
  brands: Brand[];
  isLoaded: boolean = false;

  constructor(private brandService: BrandService) {
    this.brands = [];
  }

  findBrands(): void {
    this.brandService.getBrands()
      .then((result:Brand[]) => {
        this.brands = result;
        this.isLoaded = true;
      })
      .catch(err => {
        this.brands = [];
      });
  }

  ngOnInit(): void {
    this.findBrands();
  }

}
