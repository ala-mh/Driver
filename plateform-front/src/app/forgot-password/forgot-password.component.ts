import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Message} from "primeng/api";
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  form: any = {
    email: null,
  };


  isEmailInputValid = false;
  isSubmitted = false;
  isSubmittedFailed = false;
  errorMessage = '';
  messages!: Message[];
  isForgotPassword = false;

  constructor(private router: Router,
              private authService: AuthService,
  ) {
  }

  ngOnInit() {
  }

  checkValidity(event: any) {
    this.isEmailInputValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value.trim());
  }

  signIn(): void {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    const {email} = this.form;
    this.authService.forgotPassword(email).subscribe({
      next: data => {
        this.isSubmittedFailed = false;
        this.isForgotPassword = data.isForgotPassword;
        this.messages = [{severity: 'success', summary: 'Success', detail: data.message}];
      },
      error: err => {
        this.errorMessage = err.message;
        this.isSubmittedFailed = true;
      }
    });
  }


}
