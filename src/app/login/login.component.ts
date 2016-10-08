import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  model = new User('username', 'password');

  constructor() {
  }

  onSubmit() {
    console.log("登录中");
  }
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }


}
