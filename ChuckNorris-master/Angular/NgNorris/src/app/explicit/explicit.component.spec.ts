/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExplicitComponent } from './explicit.component';

describe('ExplicitComponent', () => {
  let component: ExplicitComponent;
  let fixture: ComponentFixture<ExplicitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplicitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
