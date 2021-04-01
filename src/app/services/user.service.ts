import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000/users';
  users: User[] = [];
  isAuthenticated = true;
  currentUser: User = null;

  constructor(private router: Router, private http: HttpClient) {
    this.http.get(this.url).subscribe((data: User[]) => {
      this.users = data;
    });
  }

  login(email: string, password: string): Observable<any> {
    let pass = null;
    this.users.forEach((user) => {
      if (user['email'] == email) {
        pass = user['password'];
        this.currentUser = user;
      }
    });

    if (pass != null) {
      if (password == pass) {
        this.isAuthenticated = true;
        return of({}).pipe(delay(0));
      } else {
        this.currentUser = null;
        return throwError('Invalid password');
      }
    } else {
      this.currentUser = null;
      return throwError('Invalid email');
    }
  }

  register(login: string, email: string, password: string): Observable<any> {
    this.isAuthenticated = true;
    return this.http.post(
      this.url,
      {
        id: '',
        login: login,
        email: email,
        password: password,
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }

  signOut(): Observable<any> {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
    return of({});
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
