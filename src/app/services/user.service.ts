import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersData: any;

  constructor() {
   }

  addUser(user: User) {
    this.usersData = JSON.parse(localStorage.getItem('UsersData')) || [];
    user.registerDate = new Date();
    this.usersData.push(user);
    localStorage.setItem('UsersData', JSON.stringify(this.usersData));
  }

  getUsers() {
    return JSON.parse(localStorage.getItem('UsersData')) || [];
  }
}
