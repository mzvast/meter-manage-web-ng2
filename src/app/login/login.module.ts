import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {routing} from './login.routing';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
/*TODO:为什么FormsModule需要重复导入？*/
    routing
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
