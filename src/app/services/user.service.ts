import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000/users';
  constructor(private router: Router, private http: HttpClient) {}

  email: string = 'user1@gmail.com';
  password: string = '123';
  isAuthenticated = true;

  login(email: string, password: string): Observable<any> {
    if (email == this.email && password == this.password) {
      this.isAuthenticated = true;
      return of({}).pipe(delay(0));
    } else {
      return throwError('Invalid login or password');
    }
  }

  register(login: string, email: string, password: string): Observable<any> {
    this.isAuthenticated = true;
    return this.http.post(this.url, {
      id: '',
      login: login,
      email: email,
      password: password,
    },
    {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    });
  }

  signOut(): Observable<any> {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
    return of({});
  }
}
