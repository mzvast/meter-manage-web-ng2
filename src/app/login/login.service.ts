import { Injectable } from '@angular/core';
import {User} from '../shared/user';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private router: Router) { }
  doLogin(user: User) {
    /*TODO:login logic*/
    console.log(user.name, user.password);
    this.router.navigate(['/action']);
  }
}
