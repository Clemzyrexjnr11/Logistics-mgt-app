import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import { MatTabsModule } from '@angular/material/tabs';
import { AvatarModule } from 'ngx-avatars';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule
  ],
  exports:[
    MatIconModule,
    MatTabsModule,
    AvatarModule
  ]
})
export class SharedModule { }
