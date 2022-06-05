import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMovementListPageComponent } from './stock-movement-list-page.component';

describe('StockMovementListPageComponent', () => {
  let component: StockMovementListPageComponent;
  let fixture: ComponentFixture<StockMovementListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockMovementListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMovementListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
