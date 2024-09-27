/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VerreDeauComponent } from './verreDeau.component';

describe('VerreDeauComponent', () => {
  let component: VerreDeauComponent;
  let fixture: ComponentFixture<VerreDeauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerreDeauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerreDeauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
