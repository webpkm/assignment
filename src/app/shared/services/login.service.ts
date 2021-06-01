import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly httpClient: HttpClient) { }

  login(username: string, password: string): Observable<LoginResponse[]> {
    return this.httpClient.get<LoginResponse[]>('./assets/login.data.json');
  }
}
