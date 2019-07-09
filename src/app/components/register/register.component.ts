import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) { }


  ngOnInit() {
    this.user = new User();
  }

  RegisterUser(user: User, passwordRetyped) {
    if (user.password !== passwordRetyped) {
      alert('Password is not the same with the retyped one');
    } else {
      this.userService.addUser(user);
    }
  }

  CheckForm(event, form) {
    event.preventDefault();
    this.RegisterUser(form.user, form.passwordRetyped);
  }
}
