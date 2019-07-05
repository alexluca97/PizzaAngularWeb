import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean;

  constructor() { }

  checkUserDetails(username: string, password: string) {
    // post these details to API server return user info if correct
    return new Promise((resolve, reject) => {
      if (username === 'admin' && password === 'admin') {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }
}
