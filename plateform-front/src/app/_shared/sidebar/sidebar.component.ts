import {Component, Input, OnInit} from '@angular/core';
import {StorageService} from "../../_services/storage.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() sideNavStatus: boolean = false;

  currentUser!: any;

  list = [
    {
      number: '1',
      name: 'Dashboard',
      icon: 'fa-solid fa-chart-pie',
      route: 'dashboard',
      permission: 'DASHBOARD'
    },
    {
      number: '2',
      name: 'List of Admins',
      icon: 'fa-solid fa-users-gear',
      route: 'admin-list',
      permission: 'ADMIN'
    },
    {
      number: '3',
      name: 'List of Permissions',
      icon: 'fa-solid fa-lock',
      route: 'perms-list',
      permission: 'PERMISSION'
    },
    {
      number: '4',
      name: 'List of Clients',
      icon: 'fa-solid fa-users',
      route: 'client-list',
      permission: 'CLIENT'
    },
    {
      number: '5',
      name: 'List of Restaurants',
      icon: 'fa-solid fa-utensils',
      route: 'restaurant-list',
      permission: 'RESTAURANT'
    },
    {
      number: '6',
      name: 'List of Reservations',
      icon: 'fa-solid fa-calendar-days',
      route: 'reservation-list',
      permission: 'RESERVATION'
    },
    {
      number: '7',
      name: 'List Of Discounts',
      icon: 'fa-solid fa-percent',
      route: 'discount-list',
      permission: 'COUPONS'
    },
    {
      number: '8',
      name: 'Messaging Service',
      icon: 'fa-solid fa-comment-sms',
      route: 'sms',
      permission: 'MESSAGING'
    },
    {
      number: '9',
      name: 'Mailing Service',
      icon: 'fa-solid fa-at',
      route: 'email',
      permission: 'MAILING'
    },
    {
      number: '10',
      name: 'List of Commissions',
      icon: 'fa-solid fa-sack-dollar',
      route: 'commission-list',
      permission: 'RESERVATION'
    },
  ];

  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    this.currentUser = this.storageService.getUser();
  }

  hasAuthority(permission: String): boolean {
    return this.currentUser.permissions.some(item => item.name === permission);
  }

}
