import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-list-page',
  templateUrl: './location-list-page.component.html',
  styleUrls: ['./location-list-page.component.css']
})
export class LocationListPageComponent implements OnInit {
  locations=[{'id':0, 'name': ''}];

  constructor() {
    this.locations = [];
  }

  findLocations(): [] {
    let localLocations = localStorage.getItem('locations');
    if (localLocations)
      return JSON.parse(localLocations);
    return [];
  }

  ngOnInit(): void {
    this.locations = this.findLocations();
  }

}
