import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mat2TableComponent } from './mat2-table.component';

describe('Mat2TableComponent', () => {
  let component: Mat2TableComponent;
  let fixture: ComponentFixture<Mat2TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mat2TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mat2TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
