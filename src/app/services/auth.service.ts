import { tap, shareReplay, map, catchError, delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { User } from 'src/models/user.model';

export const ANONYMOUS_USER: User = {
  id: undefined,
  email: '',
  name: '',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private subject = new BehaviorSubject<User>(ANONYMOUS_USER);

  user$: Observable<User> = this.subject.asObservable();

  isLoggedIn$: Observable<boolean> = this.user$.pipe(map((user) => !!user.id));

  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(
    map((isLoggedIn) => !isLoggedIn)
  );

  constructor(private http: HttpClient) {}

  checkEmail(email: string): Observable<any> {
    return this.http
      .get(
        'https://angular-security-nodejs.oa.r.appspot.com/check-email?email=' +
          email
      )
      .pipe(
        delay(400),
        map((result) => {
          const exists = result['emailExists'] === true ? true : false;
          console.log('email result', exists);
          console.log('exists', exists);
          return exists;
        }),
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
      );
  }
  checkUsername(username: string) {
    return this.http
      .get(
        'https://angular-security-nodejs.oa.r.appspot.com/check-username?username=' +
          username
      )
      .pipe(
        map((result) => {
          const exists = result['usernameExists'] === true ? true : false;
          console.log('auth username result', exists);
          console.log('Username exists', exists);
          return exists;
        }),
        delay(400),
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
      );
  }
  signUp(email: string, password: string) {
    return this.http
      .post<User>('/api/signup', { email, password })
      .pipe(
        shareReplay(),
        tap((user) => this.subject.next(user))
      );
  }
}
