import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {StorageService} from "../_services/storage.service";
import {AuthService} from "../_services/auth.service";

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordGuard implements CanActivate {
  constructor(private router: Router, private storageService: StorageService, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check your authentication logic here
    this.authService.resetPassword(route.params['resetPasswordAccessToken']).subscribe({
      next: data => {
        if (data){
          const  isResetPassword = data.isResetPassword;
          if (isResetPassword) {
            this.storageService.saveToken(data.resetPasswordAccessToken);
            return true;
          }
        }
        // If not authenticated, redirect to the login page or another page
        this.router.navigate(['/login']);
        return false;
      },
      error: err => {
      }
    });
    return true;
  }
}
