import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { EmailExistsAsyncValidator } from 'src/shared/validators/email-exists-async.validator';
import { EmailPatternAsyncValidator } from 'src/shared/validators/email-pattern-async.validator';
import { PasswordLowercaseValidator } from 'src/shared/validators/password-lowercase.validator';
import { PasswordNumbersValidator } from 'src/shared/validators/password-numbers.validator';
import { PasswordSpecialCharactersValidator } from 'src/shared/validators/password-special-characters.validator copy';
import { PasswordUppercaseValidator } from 'src/shared/validators/password-uppercase.validator';
import { UsernameAsyncValidator } from 'src/shared/validators/username-async.validator';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;
  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(4)]),
        Validators.composeAsync([
          UsernameAsyncValidator.createValidator(this.auth),
        ]),
      ],
      email: [
        '',
        [Validators.required],
        [
          EmailExistsAsyncValidator.createValidator(this.auth),
          EmailPatternAsyncValidator.createValidator(),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          PasswordUppercaseValidator,
          PasswordLowercaseValidator,
          PasswordNumbersValidator,
          PasswordSpecialCharactersValidator,
        ],
      ],
      confirmPassword: ['', Validators.required],
    });
  }
}
