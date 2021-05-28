import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {validValidator} from '../custom-validator/util';

@Directive({
  selector: '[appMobile]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MobileDirective, multi: true }],
})
export class MobileDirective implements Validator{

  validate(control: AbstractControl): {[key: string]: any} | null {
    // 注意control
    return validValidator(/^\w{11}$/, 'errorMobile')(control);
  }

}
