import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user = new User();
  }

  loginUser(event, user: User) {
    event.preventDefault();

    this.auth.checkUserDetails(user.username, user.password).then((result: boolean ) => {
      this.auth.isAuth = result;
    });
  }

}

class User {
  username: string;
  password: string;

  constructor() { }
}