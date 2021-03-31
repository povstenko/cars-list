import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(myForm: NgForm) {
    console.log(myForm);
    let login = myForm.value.login;
    let email = myForm.value.email;
    let password = myForm.value.password;

    if (myForm.valid) {
      this.userService.register(login, email, password).subscribe(
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
