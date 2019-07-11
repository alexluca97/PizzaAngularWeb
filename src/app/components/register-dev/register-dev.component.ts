import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import notify from 'devextreme/ui/notify';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-dev',
  templateUrl: './register-dev.component.html',
  styleUrls: ['./register-dev.component.css']
})
export class RegisterDevComponent implements OnInit {

  user: any;
  namePattern: any = /^[A-Z][a-z]{2,}(\s[A-Z][a-z]{2,}){1,2}$/;
  maxDate: Date = new Date();
  password: string;
  onPassChanged: any;
  registerBtn: any = {
    text: 'Register',
    type: 'success',
    useSubmitBehavior: true
    // onClick: (e: any) => {
    //   const validation = e.validationGroup.validate();
    //   if (!validation.isValid) {
    //     notify(/*text,tip,durata*/'Nu ai completat toate campurile', 'error', 3000);
    //     return;
    //   }
    //   alert('well done!');
    // }
  };

  cancelBtn = {
    text: 'Cancel',
    onClick: () => {
      this.router.navigate(['/login-dev']);
    }
  };

  constructor(private router: Router, private userService: UserService, private auth:AuthService) {
    this.user = new User();
    this.password = '';
    this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() - 18));
    this.onPassChanged = this.onPassChange.bind(this);
  }

  onPassChange(event: any) {
    if (event.event) {
      this.password = String(event.value);
    }
  }

  passwordComparison = () => {
    return this.password;
  }

  checkComparison = () => {
    return true;
  }

  registerUser(user) {

    const date = new Date(String(user.dateOfBirth));
    user.dateOfBirth = '';
    user.dateOfBirth = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
    console.log(user);
    this.userService.addUser(user);
    this.router.navigate(['/login-dev']);
  }

  // tslint:disable-next-line: only-arrow-functions
  onFormSubmit = (e) => {
    notify({
      message: 'You have submitted the form',
      position: {
        my: 'center top',
        at: 'center top'
      }
    }, 'success', 3000);
    e.preventDefault();

    this.registerUser(this.user);
  }



  ngOnInit() {
    if (this.auth.isAuth) {
      this.router.navigate(['home']);
    }
  }

}
