import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
];

export const routing = RouterModule.forChild(routes);
