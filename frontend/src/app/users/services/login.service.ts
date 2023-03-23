import { Observable } from 'rxjs';
import { apiConstants } from './../../../constants/api.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginModel> {
    return this.http.put<LoginModel>(apiConstants.login, {
      username,
      password,
    });
  }
}
