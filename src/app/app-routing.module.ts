// import { ActionComponent } from './action/action.component';
// import { ManageComponent } from './manage/manage.component';
import { LoginComponent } from './core/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'manage', loadChildren: 'app/manage/manage.module#ManageModule' },
  { path: 'action', loadChildren: 'app/action/action.module#ActionModule' },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ManageNg2RoutingModule { }
