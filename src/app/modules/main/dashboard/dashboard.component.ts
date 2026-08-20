import { Component } from '@angular/core';
import { AuthenticationService } from '../../controllers/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 shipments = [];
 userName!:string
 constructor(private authService:AuthenticationService){
   this.userName = this.authService.userName.split(" ")[0];
 }
}
