/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BonbonComponent } from './bonbon.component';

describe('BonbonComponent', () => {
  let component: BonbonComponent;
  let fixture: ComponentFixture<BonbonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonbonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
