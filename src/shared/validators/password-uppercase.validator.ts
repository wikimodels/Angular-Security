import { AbstractControl, ValidationErrors } from '@angular/forms';
import { from, of } from 'rxjs';

export const PasswordUppercaseValidator = function (
  control: AbstractControl
): ValidationErrors | null {
  let value: string = control.value || '';
  let msg = '';
  if (!value) {
    return null;
  }

  let upperCaseCharacters = /[A-Z]+/g;

  if (
    upperCaseCharacters.test(value) === false ||
    (value.match(/[A-Z]/g) || []).length < 2
  ) {
    return {
      passwordUppercase: 'Password must contain at least two uppercase letters',
    };
  }
};
