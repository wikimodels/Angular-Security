import { AbstractControl, ValidationErrors } from '@angular/forms';
import { from, of } from 'rxjs';

export const PasswordNumbersValidator = function (
  control: AbstractControl
): ValidationErrors | null {
  let value: string = control.value || '';
  let msg = '';
  if (!value) {
    return null;
  }

  let numberCharacters = /[0-9]+/g;
  // let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (
    numberCharacters.test(value) === false ||
    (value.match(/[A-Z]/g) || []).length < 2
  ) {
    return {
      passwordNumbers: 'Password must contain at least two numbers',
    };
  }
};
