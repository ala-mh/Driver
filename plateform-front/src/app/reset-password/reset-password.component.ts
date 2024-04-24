import {Component, OnInit, ViewChild} from '@angular/core';
import {StorageService} from "../_services/storage.service";
import {UserService} from "../_services/user.service";
import {ToastComponent} from "../_shared/toast/toast.component";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {SharedService} from "../_services/shared.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  @ViewChild('f', {static: false}) f!: NgForm;

  isSubmitted = false;

  isNewPasswordInputValid = false;
  isVerifyPasswordInputValid = false

  hideNewPassword = true;
  hideVerifyPassword = true;

  form: any = {
    newPassword: null,
    verifyPassword: null
  };

  constructor(private userService: UserService,
              private toast: ToastComponent,
              private router: Router,
              private sharedService: SharedService
  ) {
  }

  ngOnInit() {
  }

  checkValidity(id: any, event: any) {
    switch (id) {
      case 1 :
        this.isNewPasswordInputValid = event.target.value.trim() !== '';
        break;
      case 2 :
        this.isVerifyPasswordInputValid = event.target.value.trim() !== '';
        break;
    }
  }

  PasswordsMatch(): boolean {
    return this.form.newPassword === this.form.verifyPassword;
  }

  toggleNewPasswordVisibility() {
    this.hideNewPassword = !this.hideNewPassword;
  }

  toggleVerifyPasswordVisibility() {
    this.hideVerifyPassword = !this.hideVerifyPassword;
  }

  onSubmit(): void {
    const {newPassword, verifyPassword} = this.form;
    const resetPasswordAccessToken = StorageService.getToken();
    const resetPasswordRequest = {resetPasswordAccessToken, newPassword, verifyPassword}
    this.userService.resetPassword(resetPasswordRequest).subscribe({
      next: data => {
        if (data) {
          this.toast.showToast('Password reset successfully!', 'Password changed successfully.', 'success');
          this.sharedService.changeMessage('Password reset successfully!');
          this.router.navigate(['/login']);
        } else {
          this.toast.showToast('Password reset unsuccessfully!', 'Password changed unsuccessfully.', 'error');
        }
        this.f.resetForm();
        this.isNewPasswordInputValid = false;
        this.isVerifyPasswordInputValid = false
      },
      error: err => {
      }
    });
  }

}
