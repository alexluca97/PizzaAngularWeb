import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean;
  userName: string;

  constructor(private userService: UserService) { }

  checkUserDetails(username: string, password: string) {
    // post these details to API server return user info if correct
    const usersDetails = this.userService.getUsers();
    const foundUser = usersDetails.find(x => x.username === username && x.password === password);

    return new Promise((resolve, reject) => {
      if (foundUser) {
        this.userName = username;
        resolve(true);
      } else {
        if (username === 'admin' && password === 'admin') {
          this.userName = username;
          resolve(true);
        } else {
          resolve(false);
        }
      }
    });
  }

  canActivate() {
    return this.isAuth;
  }
}
