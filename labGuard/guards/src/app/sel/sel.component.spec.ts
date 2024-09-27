/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelComponent } from './sel.component';

describe('SelComponent', () => {
  let component: SelComponent;
  let fixture: ComponentFixture<SelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
