import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: User = new User('username', 'password');

  constructor(public loginService: LoginService) {
  }

  onSubmit() {
    this.loginService.login(this.user);
  }
  get diagnostic() { return JSON.stringify(this.user); }

  ngOnInit() {
  }


}
