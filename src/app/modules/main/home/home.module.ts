import { NgModule } from "@angular/core";
import { LandingComponent } from './landing/landing.component';
import { HomeRoutingModule } from "./home-routing.module";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations:[
    LandingComponent
  ],
    imports:[HomeRoutingModule, CommonModule, SharedModule],
    exports:[]
})

export class HomeModule{}