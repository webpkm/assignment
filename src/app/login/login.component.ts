import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const PASSWORD_MIN_LENGH = 6;
const PASSWORD_MAX_LENGH = 20;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('username') username!: ElementRef<HTMLInputElement>;
  loginFormGroup: FormGroup;
  isSubmitted: boolean = false;
  passwordMinLength: number = PASSWORD_MIN_LENGH;
  passwordMaxLength: number = PASSWORD_MAX_LENGH;

  constructor(private readonly router: Router) {
    this.loginFormGroup = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(PASSWORD_MIN_LENGH),
        Validators.maxLength(PASSWORD_MAX_LENGH)
      ]),
    });
  }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    this.isSubmitted = true;
    console.log(this.loginFormGroup.value);

    // Check if login form is valid then hit the login service
    if (this.loginFormGroup.valid) {
      // set the sessionStorage value so that we can check if user is logged in or not
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('username', this.loginFormGroup.value.username);
      this.router.navigate(['/dashboard']);
    }
  }

  ngAfterViewInit() {
    this.username.nativeElement.focus();
  }
}
