import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from './shared/models/types';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly httpClient: HttpClient) { }

  login(): Observable<LoginResponse[]> {
    return this.httpClient.get<LoginResponse[]>('./assets/login.data.json');
  }
}
