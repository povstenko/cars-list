import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(myForm: NgForm) {
    // console.log(myForm);
    let email = myForm.value.email;
    let password = myForm.value.password;
    if (myForm.valid) {
      this.userService.login(email, password).subscribe(
        () => {
          this.router.navigate(['/auth/home']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
