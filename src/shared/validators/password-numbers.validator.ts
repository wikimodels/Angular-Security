import { AbstractControl, ValidationErrors } from '@angular/forms';

export const PasswordNumbersValidator = function (
  control: AbstractControl
): ValidationErrors | null {
  let value: string = control.value || '';

  if (!value) {
    return null;
  }

  let numberCharacters = /[0-9]+/g;
  console.log('Uppercase', (value.match(/[A-Z]/g) || []).length);
  if (
    numberCharacters.test(value) === false ||
    (value.match(/[A-Z]/g) || []).length < 2
  ) {
    return {
      passwordNumbers: 'Password must contain at least two numbers',
    };
  }
};
