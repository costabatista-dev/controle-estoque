import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchListPageComponent } from './batch-list-page.component';

describe('BatchListPageComponent', () => {
  let component: BatchListPageComponent;
  let fixture: ComponentFixture<BatchListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
