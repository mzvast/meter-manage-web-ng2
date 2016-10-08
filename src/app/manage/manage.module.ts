import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import {routing} from './manage.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ManageComponent]
})
export class ManageModule { }
