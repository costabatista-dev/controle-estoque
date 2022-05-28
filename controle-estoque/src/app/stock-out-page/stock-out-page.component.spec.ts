import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockOutPageComponent } from './stock-out-page.component';

describe('StockOutPageComponent', () => {
  let component: StockOutPageComponent;
  let fixture: ComponentFixture<StockOutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockOutPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockOutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
