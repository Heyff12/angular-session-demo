import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { EventEmitter, Injector } from '@angular/core';
import {
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { mockUtils } from '../../../../../../test-utils/mock-utils';
import { By } from '@angular/platform-browser';
import { TextInputComponent } from './text-input.component';

describe('TextInputComponent', () => {
  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;
  let injector;

  beforeEach(() => {
    injector = mockUtils.createSpyObject('get');
    mockUtils.mockReturn(injector.get, {});
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
      declarations: [TextInputComponent],
      providers: [
        { provide: Injector, useValue: injector },
        NgControl,
      ],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show error message when textarea is untouched', () => {
    component.ngControl = {
      touched: false,
      dirty: false,
      invalid: true,
    } as any;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.error-message'))).toBeNull();
  });

  it('should display error message when value is invalid', () => {
    component.ngControl = {
      touched: true,
      dirty: false,
      invalid: true,
      errors: {
        message: '请输入',
      },
    } as any;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.error-message'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('input')).classes).toContainKey('error');
  });
  it('should emit message when focus changed', () => {
    component.onBlur = new EventEmitter<boolean>(false);
    component.onBlur.emit = jest.fn();
    component.setFocused(false);
    expect(component.onBlur.emit).toHaveBeenCalled();
  });
});
