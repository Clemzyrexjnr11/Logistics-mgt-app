import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { HomeComponent } from "./home.component";
import { TrackShipmentComponent } from "../shipments/track-shipment/track-shipment.component";

const routes:Routes = [
    {
        path:'',
        component:HomeComponent,
        children:[
            {
                path:'',
                component:LandingComponent
            },
            {
                path:'track-shipment',
                component:TrackShipmentComponent
            }
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class HomeRoutingModule{}