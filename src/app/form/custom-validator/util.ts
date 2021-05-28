import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function validValidator(nameRegex: RegExp, errField): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return nameRegex.test(control.value) ? null : { [errField]: { value: control.value } };
  };
}
