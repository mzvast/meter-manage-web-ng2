// import { ActionComponent } from './action/action.component';
// import { ManageComponent } from './manage/manage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'action', loadChildren: 'app/action/action.module#ActionModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ManageNg2RoutingModule { }
