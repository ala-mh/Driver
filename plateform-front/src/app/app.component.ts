import {Component} from '@angular/core';
import {StorageService} from "./_services/storage.service";
import {PrimeNGConfig} from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  username?: string;
  private role!: string;

  constructor(private storageService: StorageService, private primengConfig: PrimeNGConfig, private translateService: TranslateService, private router: Router) {
    translateService.setDefaultLang('en'); // Set the default language
    translateService.use('en'); // Set the initial language
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.role = user.role;
      if (this.role == 'ROLE_SUPER_ADMIN' || this.role == 'ROLE_MANAGER') {
        this.router.navigate(['/board']);
      }
    }
  }
}
