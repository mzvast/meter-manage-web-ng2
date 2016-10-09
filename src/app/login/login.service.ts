import { AuthService } from './../core/auth.service';
import { Injectable } from '@angular/core';
import {User} from '../shared/user';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {
  message: string;
  constructor(private router: Router, private authService: AuthService) { }
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    console.log(this.message);
  }
  login(user: User) {
    /*TODO:login logic*/
    console.log(user.name, user.password);
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let savedUrl = this.authService.redirectUrl;
        let redirect = savedUrl ? savedUrl : '/admin';
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }
  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
