/// <reference path="../../../typings/index.d.ts"/>

import {InputComponent} from './inp';
import {TestBed, async} from '@angular/core/testing';

describe('input component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render input field and its value', () => {
    const fixture = TestBed.createComponent(InputComponent);
    fixture.detectChanges();
    const inpValue = fixture.nativeElement;
    expect(inpValue.querySelector('p').textContent).toBe('199');
  });
});
