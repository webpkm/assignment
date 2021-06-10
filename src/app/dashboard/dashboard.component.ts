import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../shared/models/types';
import { Logout } from '../store/actions/authentication.actions';
import { AppState, selectAuthenticationState } from '../store/app.states';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: User = new User();
  getState!: Observable<any>;
  isAuthenticated: boolean = false;

  constructor(
    private readonly router: Router,
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthenticationState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      if (state) {
        this.user = state.user;
      }
    });
  }

  logout(): void {
    this.store.dispatch(new Logout(""));
    this.router.navigate(['login']);
  }
}
