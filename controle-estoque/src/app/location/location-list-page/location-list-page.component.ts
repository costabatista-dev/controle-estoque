import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/entity/Entities';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-location-list-page',
  templateUrl: './location-list-page.component.html',
  styleUrls: ['./location-list-page.component.css']
})
export class LocationListPageComponent implements OnInit {
  locations:Location[];
  isLoaded:boolean=false;

  constructor(private locationService: LocationService) {
    this.locations = [];
  }

  findLocations(): void {
    this.locationService.getAll().then((result:Location[]) => {
      this.locations = result;
    }).catch((err:Error) => {
      this.locations = [];
    }).finally(() => this.isLoaded = true);
  }

  ngOnInit(): void {
    this.findLocations();
  }

}
