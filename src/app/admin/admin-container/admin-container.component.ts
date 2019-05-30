import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface IUser {
  id: number;
  photo: string;
  name: string;
  email: string;
  storeId: string;
  lastLogin: string;
  numberOfLogins: string;
  role: string;
  active: boolean;
  admin: boolean;
}

export interface IStore {
  id: number;
  storeId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  region: string;
  assistant: string;
}

@Component({
  selector: 'bb-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.scss']
})
export class AdminContainerComponent implements OnInit {
  isUsersLoaded = false;
  isStoresLoaded = false;
  users: [IUser];
  stores: [IStore];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.getUsers();
    this.getStores();
  }

  getUsers() {
    this.adminService.getUsers().subscribe((data: [IUser]) => {
      this.users = data;
      this.isUsersLoaded = true;
    });
  }

  getStores() {
    this.adminService.getStores().subscribe((data: [IStore]) => {
      this.stores = data;
      this.isStoresLoaded = true;
    });
  }

  changeSliderParent($event) {
    console.log('event', $event);
  }
}
