import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  username: string;
  constructor(private readonly router: Router) { 
    this.username = sessionStorage.getItem('username') || '';
  }

  ngOnInit(): void {
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
