import { Injectable } from '@angular/core';
import {User} from '../shared/user';

@Injectable()
export class LoginService {

  constructor() { }
  doLogin(user: User) {
    /*TODO:login logic*/
    console.log(user.name, user.password);
  }
}
