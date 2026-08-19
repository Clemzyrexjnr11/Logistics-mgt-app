import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ProfileComponent } from './profile/profile.component';
import { ShipmentDetailsComponent } from './shipments/shipment-details/shipment-details.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent, ShipmentsComponent, ProfileComponent, ShipmentDetailsComponent],
  imports: [MainRoutingModule, CommonModule, SharedModule],
})
export class MainModule {}
