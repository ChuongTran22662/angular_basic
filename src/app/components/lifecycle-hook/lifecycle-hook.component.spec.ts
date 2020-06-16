/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LifecycleHookComponent } from './lifecycle-hook.component';

describe('LifecycleHookComponent', () => {
  let component: LifecycleHookComponent;
  let fixture: ComponentFixture<LifecycleHookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleHookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
