import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGaurdService } from './auth-gaurd.service';

describe('AuthGaurdService', () => {
  let service: AuthGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
      ]
    });
    service = TestBed.inject(AuthGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should isUserLoggedIn to be true', () => {
    sessionStorage.setItem('token', 'test123');
    expect(service.isUserLoggedIn()).toBeTrue();
  });

  it('should isUserLoggedIn to be false', () => {
    sessionStorage.clear();
    expect(service.isUserLoggedIn()).toBeFalse();
  });

  it('should canActivate to be true', () => {
    sessionStorage.setItem('token', 'test123');
    expect(service.canActivate()).toBeTrue();
  });

  it('should canActivate to be false', () => {
    sessionStorage.clear();
    expect(service.canActivate()).toBeFalse();
  });
});
