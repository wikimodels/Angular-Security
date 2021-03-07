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
  // let lowerCaseCharacters = /[a-z]+/g;
  // let numberCharacters = /[0-9]+/g;
  // let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  console.log('value ', (value.match(/[A-Z]/g) || []).length);
  if (
    upperCaseCharacters.test(value) === false ||
    (value.match(/[A-Z]/g) || []).length < 2
    // lowerCaseCharacters.test(value) === false ||
    // numberCharacters.test(value) === false ||
    // specialCharacters.test(value) === false
  ) {
    return {
      passwordUppercase: 'Password must contain at least two uppercase letters',
    };
  }
};
