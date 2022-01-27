import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table8Component } from './table8.component';

describe('Table8Component', () => {
  let component: Table8Component;
  let fixture: ComponentFixture<Table8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Table8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
