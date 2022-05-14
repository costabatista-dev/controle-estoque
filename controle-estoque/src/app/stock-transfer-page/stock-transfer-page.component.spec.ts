import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTransferPageComponent } from './stock-transfer-page.component';

describe('StockTransferPageComponent', () => {
  let component: StockTransferPageComponent;
  let fixture: ComponentFixture<StockTransferPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockTransferPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTransferPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
