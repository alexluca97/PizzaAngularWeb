import { Component, OnInit } from '@angular/core';
import { DxFormModule } from 'devextreme-angular';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import notify from 'devextreme/ui/notify';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login-dev',
  templateUrl: './login-dev.component.html',
  styleUrls: ['./login-dev.component.css']
})
export class LoginDevComponent implements OnInit {
  user: User;
  loginStatus = true;

  loginBtn: any = {
    text: 'Login',
    type: 'success',
    onClick: (e: any) => {
      const validation = e.validationGroup.validate();
      if (!validation.isValid) {
        notify(/*text,tip,durata*/'Nu ai completat toate campurile', 'error', 3000);
        return;
      }
      this.auth.checkUserDetails(this.user.username, this.user.password).then((result: boolean) => { this.auth.isAuth = result; });
    }
  };

  registerBtn = {
    text: 'Register',
    onClick: () => {
      this.router.navigate(['/register-dev']);
    }
  };

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.user = new User();
    if (this.auth.isAuth) {
      this.router.navigate(['home']);
    }
  }

}
