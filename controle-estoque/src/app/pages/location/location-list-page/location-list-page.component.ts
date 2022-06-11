import { Component, Inject, OnInit } from '@angular/core';
import { Location } from 'src/app/entity/Entities';
import DataLoaderService from 'src/app/services/data-loader';
import LocationService from 'src/app/services/location/location.service';

@Component({
  selector: 'app-location-list-page',
  templateUrl: './location-list-page.component.html',
  styleUrls: ['./location-list-page.component.css']
})

export class LocationListPageComponent extends DataLoaderService implements OnInit {
  locations:Location[];

  constructor(private locationService: LocationService) {
    super(locationService);
    this.locations = [];
  }

  ngOnInit(): void {
    this.loadData();
  }

  public override getService(): LocationService {
    return this.locationService;
  }

  public override setDataSet(dataSet:Location[]): void {
    this.locations = dataSet;
  }

  public override getDataSet(): Location[] {
    return this.locations;
  }

}
