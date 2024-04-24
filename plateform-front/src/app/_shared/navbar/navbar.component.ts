import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {AuthService} from "../../_services/auth.service";
import {StorageService} from "../../_services/storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../_services/shared.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  currentUser!: any

  list = [
    {
      number: '1',
      name: 'Profile',
      icon: 'pi pi-user',
      route: 'profile'
    },
    {
      number: '2',
      name: 'Logout',
      icon: 'pi pi-fw pi-power-off',
      route: 'logout'
    }
  ];

  constructor(private authService: AuthService,
              private storageService: StorageService,
              private router: Router,
              private route: ActivatedRoute,
              private sharedService: SharedService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
  }

  ngOnInit() {
    this.currentUser = this.storageService.getUser();
  }

  sideNavToggle() {
    this.menuStatus = !this.menuStatus;
    if (window.innerWidth < 1141) {
      this.menuStatus = false;
    }
    this.sideNavToggled.emit(this.menuStatus);
  }

  navigateTo(route: string) {
    if (route == 'logout') {
      this.logout();
    }
    if (route == 'profile') {
      this.router.navigate(['profile'], {relativeTo: this.route});
    }
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        this.storageService.signOut();
        this.sharedService.changeMessage('');
        this.router.navigate(['../login'], {relativeTo: this.route});
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
