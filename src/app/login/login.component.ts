import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const PASSWORD_MIN_LENGH = 6;
const PASSWORD_MAX_LENGH = 20;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  passwordMinLength: number = PASSWORD_MIN_LENGH;
  passwordMaxLength: number = PASSWORD_MAX_LENGH;

  constructor() {
    this.loginFormGroup = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(PASSWORD_MIN_LENGH),
        Validators.minLength(PASSWORD_MAX_LENGH)
      ]),
    });
  }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    console.log(this.loginFormGroup.value);

    // Check if login form is valid then hit the login service
    if (this.loginFormGroup.valid) {

    } else {
      alert('Please enter correct Username or Password');
    }
  }

}
