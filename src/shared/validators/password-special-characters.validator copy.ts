import { AbstractControl, ValidationErrors } from '@angular/forms';
import { from, of } from 'rxjs';

export const PasswordSpecialCharactersValidator = function (
  control: AbstractControl
): ValidationErrors | null {
  let value: string = control.value || '';
  let msg = '';
  if (!value) {
    return null;
  }

  let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (
    specialCharacters.test(value) === false ||
    (value.match(/[A-Z]/g) || []).length < 2
  ) {
    return {
      passwordSpecialCharacters:
        'Password must contain at least two special characters',
    };
  }
};
