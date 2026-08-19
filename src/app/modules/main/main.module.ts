import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent, DashboardComponent, ProfileComponent],
  imports: [MainRoutingModule, CommonModule, SharedModule, ReactiveFormsModule, FormsModule],
})
export class MainModule {}
