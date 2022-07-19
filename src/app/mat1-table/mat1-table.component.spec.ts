import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mat1TableComponent } from './mat1-table.component';

describe('Mat1TableComponent', () => {
  let component: Mat1TableComponent;
  let fixture: ComponentFixture<Mat1TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mat1TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mat1TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
