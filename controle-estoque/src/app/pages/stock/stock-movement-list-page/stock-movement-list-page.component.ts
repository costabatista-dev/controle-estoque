import { Component, OnInit } from '@angular/core';
import { Movement } from 'src/app/entity/Entities';
import MovementService from 'src/app/services/movement/movement.service';

@Component({
  selector: 'app-stock-movement-list-page',
  templateUrl: './stock-movement-list-page.component.html',
  styleUrls: ['./stock-movement-list-page.component.css']
})
export class StockMovementListPageComponent implements OnInit {
  movements:Movement[];
  isLoaded:boolean;

  constructor(private movementService: MovementService) {
    this.movements = [];
    this.isLoaded = false;
  }

  ngOnInit(): void {
    this.movementService.getAll().subscribe((result:Movement[]) => {
        this.movements = result;
        this.isLoaded = true;
    })
  }

}
