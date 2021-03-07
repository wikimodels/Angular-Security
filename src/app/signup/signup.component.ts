import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordLowercaseValidator } from 'src/shared/validators/password-lowercase.validator';
import { PasswordNumbersValidator } from 'src/shared/validators/password-numbers.validator';
import { PasswordSpecialCharactersValidator } from 'src/shared/validators/password-special-characters.validator copy';
import { PasswordUppercaseValidator } from 'src/shared/validators/password-uppercase.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
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
