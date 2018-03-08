/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CelebrityComponent } from './celebrity.component';

describe('CelebrityComponent', () => {
  let component: CelebrityComponent;
  let fixture: ComponentFixture<CelebrityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
