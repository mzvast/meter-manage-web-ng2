import {Routes, RouterModule} from '@angular/router';

import {ActionComponent} from './action.component';

export const routes: Routes = [
  {path: '', component: ActionComponent},
];

export const routing = RouterModule.forChild(routes);
