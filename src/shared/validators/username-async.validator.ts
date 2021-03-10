import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

export class UsernameAsyncValidator {
  static createValidator(auth: AuthService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return auth.checkUsername(control.value).pipe(
        map((result) => {
          console.log('Validator result', result);
          const hasError =
            result === false ? null : { invalidUsernameAsync: true };
          console.log('HasError', hasError);
          return hasError;
        })
      );
    };
  }
}
