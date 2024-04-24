import {Injectable} from '@angular/core';

const USER_KEY = 'auth-user';
const TOKEN_KEY = 'auth-token';
const FORGOT_PASSWORD_KEY = 'auth-forgotPassword';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {
  }

  public static getToken(): any {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    return !!user;

  }

  public isForgotPassword(): boolean {
    const isForgotPassword = window.sessionStorage.getItem(FORGOT_PASSWORD_KEY);
    return !!isForgotPassword;

  }
}
