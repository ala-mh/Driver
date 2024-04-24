import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../config/env";

const AUTH_API = environment.apiUrl + 'auth/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    )
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.put(
      AUTH_API + 'forgot-password/' + email,
      httpOptions
    )
  }

  resetPassword(resetPasswordAccessToken: string): Observable<any> {
    return this.http.get(
      AUTH_API + 'reset-password/' + resetPasswordAccessToken,
      httpOptions
    )
  }

}
