import { AbstractControl, ValidationErrors } from '@angular/forms';

export const PasswordLowercaseValidator = function (
  control: AbstractControl
): ValidationErrors | null {
  let value: string = control.value || '';
  let msg = '';
  if (!value) {
    return null;
  }

  let lowerCaseCharacters = /[a-z]+/g;

  if (
    lowerCaseCharacters.test(value) === false ||
    (value.match(/[A-Z]/g) || []).length < 2
  ) {
    return {
      passwordLowercase: 'Password must contain at least two lowercase letters',
    };
  }
};
