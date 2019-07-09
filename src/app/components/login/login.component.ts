import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  loginStatus = true;

  constructor(private auth: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    if (this.auth.isAuth) {
      this.router.navigate(['home']);
    }
  }

  LoginUser(event, user: User) {
    event.preventDefault();

    this.auth.checkUserDetails(user.username, user.password).then((result: boolean ) => {
      this.auth.isAuth = result;
    });
  }

}
