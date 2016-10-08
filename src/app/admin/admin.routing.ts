import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from './admin.component';

export const routes: Routes = [
  {path: '', component: AdminComponent},
];

export const routing = RouterModule.forChild
(routes);

