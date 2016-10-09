import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from './admin.component';
import { AuthGuardService } from './../core/auth-guard.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: AdminComponent,
    children: [
      {
        path: '',
        canActivateChild: [AuthGuardService],
        children: [
            { path: 'products', component: ManageProductsComponent},
            { path: '', component: AdminDashboardComponent}
          ]
      }
    ]
  },
];

export const routing = RouterModule.forChild(routes);

