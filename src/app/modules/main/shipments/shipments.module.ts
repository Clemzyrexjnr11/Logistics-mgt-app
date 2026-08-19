import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';
import { AllShipmentsComponent } from './all-shipments/all-shipments.component';
import { IntransitShipmentsComponent } from './intransit-shipments/intransit-shipments.component';
import { PendingShipmentsComponent } from './pending-shipments/pending-shipments.component';
import { DeliveredShipmentsComponent } from './delivered-shipments/delivered-shipments.component';
import { CancelledShipmentsComponent } from './cancelled-shipments/cancelled-shipments.component';
import { ShipmentsRoutingModule } from './shipments-routing.module';
import { ShipmentsComponent } from './shipments.component';

@NgModule({
  declarations: [
    AllShipmentsComponent, 
    ShipmentDetailsComponent,
    IntransitShipmentsComponent,
    PendingShipmentsComponent,
    DeliveredShipmentsComponent,
    CancelledShipmentsComponent,
    ShipmentsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    ShipmentsRoutingModule,
  ],
  exports: [],
})
export class ShipmentsModule {}
