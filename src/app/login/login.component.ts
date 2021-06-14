import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../shared/models/types';
import { LoginSuccess } from '../store/actions/authentication.actions';
import { selectAuthenticationState } from '../store/app.states';

const PASSWORD_MIN_LENGH = 6;
const PASSWORD_MAX_LENGH = 20;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, AfterViewInit {
  user: User = new User();
  getState!: Observable<any>;
  errorMessage: string = '';

  @ViewChild('username') username!: ElementRef<HTMLInputElement>;
  loginFormGroup: FormGroup;
  isSubmitted: boolean = false;
  passwordMinLength: number = PASSWORD_MIN_LENGH;
  passwordMaxLength: number = PASSWORD_MAX_LENGH;

  constructor(
    private readonly store: Store
  ) {
    this.getState = this.store.select(selectAuthenticationState);

    this.loginFormGroup = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(PASSWORD_MIN_LENGH),
        Validators.maxLength(PASSWORD_MAX_LENGH)
      ]),
    });
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      // console.log(state);
      if (state && state.errorMessage) {
        this.errorMessage = state.errorMessage;
      }
    });
  }

  onLoginSubmit() {
    this.isSubmitted = true;
    // console.log(this.loginFormGroup.value);

    // Check if login form is valid then hit the login service
    if (this.loginFormGroup.valid) {
      const actionPayload = {
        username: this.loginFormGroup.value.username,
        password: this.loginFormGroup.value.password
      };
      this.store.dispatch(new LoginSuccess(actionPayload));
    }
  }

  ngAfterViewInit() {
    this.username.nativeElement.focus();
  }
}
