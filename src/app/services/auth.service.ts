import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean;

  constructor(private userService: UserService) { }

  checkUserDetails(username: string, password: string) {
    // post these details to API server return user info if correct
    const usersDetails = this.userService.getUsers();
    let foundUser = usersDetails.find(x => x.username === username && x.password === password);
    console.log(usersDetails);

    return new Promise((resolve, reject) => {
      if (foundUser) {
        resolve(true);
      } else {
        if (username === 'admin' && password === 'admin') {
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
