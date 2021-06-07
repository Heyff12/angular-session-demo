import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Injector,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, FormControlName, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TextInputComponent),
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor, OnInit {
  disabled: boolean = false;

  @Input() @HostBinding('class') className: string;

  @Input() placeholder: string = '';

  @Input() maxLength: number = 255;

  @Input() type: string = 'text';

  @Output() onBlur: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('inputdom') inputdom: ElementRef;

  value: string = '';
  focused = false;
  ngControl: FormControlName;
  private onChange = _.noop;
  private onFocus = _.noop;

  @HostListener('blur')
  protected blur(event: boolean) {
    this.onBlur.emit(event);
  }

  @Output() onKeyPressed: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();
  @HostListener('keypress', ['$event']) protected keypress(event: KeyboardEvent) {
    this.onKeyPressed.emit(event);
  }

  constructor(private injector: Injector) {}

  get isError(){
    return !this.focused && (this.ngControl.touched || this.ngControl.dirty) && this.ngControl.invalid
  }

  ngOnInit(): void {
    this.ngControl = this.injector.get(NgControl) as FormControlName;
  }

  setValue(value) {
    console.log(value)
    this.value = value;
    this.onChange(value);
    if(this.inputdom){
      console.log(this.inputdom.nativeElement.value)
    }
  }

  setFocused(focused) {
    if (!focused) {
      this.blur(true);
    }
    this.focused = focused;
    this.onFocus(focused);
  }

  registerOnChange(fn: any): void {
    console.log('-----------registerOnChange-------------')
    console.log(fn)
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    console.log('-----------registerOnTouched-------------')
    console.log(fn)
    this.onFocus = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    console.log('-----------setDisabledState-------------',isDisabled)
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    console.log('-----------writeValue-------------',obj)
    this.setValue(obj);
  }
}
