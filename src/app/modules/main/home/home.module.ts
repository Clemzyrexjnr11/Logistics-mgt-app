import { NgModule } from "@angular/core";
import { LandingComponent } from './landing/landing.component';
import { HomeRoutingModule } from "./home-routing.module";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TrackShipmentComponent } from "../shipments/track-shipment/track-shipment.component";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations:[
    LandingComponent,
    TrackShipmentComponent,
    HomeComponent
  ],
    imports:[HomeRoutingModule, CommonModule, SharedModule, ReactiveFormsModule, FormsModule],
    exports:[]
})

export class HomeModule{}