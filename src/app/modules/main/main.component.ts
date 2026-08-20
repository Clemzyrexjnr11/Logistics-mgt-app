import { Component } from '@angular/core';
import { AuthenticationService } from '../controllers/services/authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
 userName!:string
 constructor(private authService:AuthenticationService){
   this.userName = this.authService.userName;
 }
}
