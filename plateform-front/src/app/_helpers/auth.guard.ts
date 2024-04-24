import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {StorageService} from "../_services/storage.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private storageService: StorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check your authentication logic here
    const isAuthenticated = this.storageService.isLoggedIn();

    if (isAuthenticated) {
      return true;
    } else {
      // If not authenticated, redirect to the login page or another page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
