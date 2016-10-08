import {Routes, RouterModule} from '@angular/router';

import {ManageComponent} from './manage.component';

export const routes: Routes = [
  {path: '', component: ManageComponent},
];

export const routing = RouterModule.forChild
(routes);

