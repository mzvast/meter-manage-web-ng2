import { routing } from './admin.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [AdminComponent, ManageProductsComponent, AdminDashboardComponent]
})
export class AdminModule { }
