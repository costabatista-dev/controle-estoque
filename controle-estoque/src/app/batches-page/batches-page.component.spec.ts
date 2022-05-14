import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesPageComponent } from './batches-page.component';

describe('BatchesPageComponent', () => {
  let component: BatchesPageComponent;
  let fixture: ComponentFixture<BatchesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
