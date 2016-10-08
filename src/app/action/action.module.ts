import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionComponent } from './action.component';
import {routing} from './action.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ActionComponent]
})
export class ActionModule { }
