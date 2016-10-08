import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {routing} from './login.routing';
import {FormsModule} from '@angular/forms';
import {LoginService} from './login.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
/*TODO:为什么FormsModule需要重复导入？*/
    routing
  ],
  providers: [ LoginService],
  declarations: [LoginComponent]
})
export class LoginModule { }
