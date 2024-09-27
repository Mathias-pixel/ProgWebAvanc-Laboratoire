/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CaramelAuSelComponent } from './caramelAuSel.component';

describe('CaramelAuSelComponent', () => {
  let component: CaramelAuSelComponent;
  let fixture: ComponentFixture<CaramelAuSelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaramelAuSelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaramelAuSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
