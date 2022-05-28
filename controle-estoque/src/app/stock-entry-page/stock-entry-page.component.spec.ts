import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockEntryPageComponent } from './stock-entry-page.component';

describe('StockEntryPageComponent', () => {
  let component: StockEntryPageComponent;
  let fixture: ComponentFixture<StockEntryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockEntryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockEntryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
