import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  email: string = "user1@gmail.com";
  password: string = "123";
  isAuthenticated = false;
  
  login(email: string, password: string): Observable<any> {
    if(email == this.email && password == this.password) {
      this.isAuthenticated = true;
      return of({}).pipe(delay(2000));
    }
    else {
      return throwError("Invalid login or password");
    }
  }

  register() {}
  
  signOut() : Observable<any>{
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
    return of({});
  }

}
