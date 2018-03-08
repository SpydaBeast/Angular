/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JokesComponent } from './jokes.component';

describe('JokesComponent', () => {
  let component: JokesComponent;
  let fixture: ComponentFixture<JokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
