import {Component, OnInit} from '@angular/core';
import {AuthService} from "../_services/auth.service";
import {StorageService} from "../_services/storage.service";
import {Router} from "@angular/router";
import {SharedService} from "../_services/shared.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role!: string;

  constructor(private sharedService: SharedService,
              private authService: AuthService,
              private storageService: StorageService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.role = this.storageService.getUser().role;
      this.detectPage(this.role);
    }
  }

  resetPassword(): void {
    this.router.navigate(['/forgot-password']);
  }

  onSubmit(): void {
    const {username, password} = this.form;
    this.authService.login(username, password).subscribe({
      next: data => {
        if (data.userInfo) {
          this.storageService.saveToken(data.access_token);
          this.storageService.saveUser(data.userInfo);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.role = this.storageService.getUser().role;
          this.detectPage(this.role);
        } else {
          this.errorMessage = data.message;
          this.isLoginFailed = true;
        }
      },
      error: err => {
        this.isLoginFailed = true;
      }
    });
  }

  detectPage(role: any): void {
    if (role == 'ROLE_SUPER_ADMIN') {
      this.router.navigate(['/board/admin-list']);
    }
    if (role == 'ROLE_MANAGER') {
      this.router.navigate(['/board/restaurant-list']);
    }
  }
}
