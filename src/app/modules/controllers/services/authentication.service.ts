import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StringHelper } from '../helpers/string.helper'; 
import { IUser } from '../../shared/interface/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  rootServiceUrl = 'http://localhost:4500/';
  activeUserSubject!: BehaviorSubject<any>;
  user!:IUser;
  constructor(private http: HttpClient, private router:Router) {
    this.activeUserSubject = new BehaviorSubject(
      localStorage.getItem('activeUser')
    );

    this.activeUserSubject.subscribe(res => {
      let parsedResponse = JSON.parse(res);
      if(parsedResponse){
      this.user = parsedResponse.user;
      }
  });
  }

  get userName(){
    return this.user.username;
  }
  get userEmail(){
    return this.user.email;
  }

  signUp(request: any) {
    return this.http.post(this.rootServiceUrl + 'api/auth/signup', request);
  }

  login(request: any) {
    return this.http.post(this.rootServiceUrl + 'api/auth/login', request);
  }

  logout(){
    localStorage.clear();
    this.activeUserSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  saveActiveUserInLocalStorage(user: any) {
    let token = user.token;
    if (!token) return;

    let decodedToken = StringHelper.decodeToken(token);

    if (!decodedToken.exp) {
      console.log('Missing expiry. Invalid token');
      throw new Error('Invalid token');
    }

    let tokenExpiryDate = new Date(decodedToken.exp * 1000);
    let now = new Date();

    if (tokenExpiryDate <= now) {
      console.log('Expired token');
      throw new Error('Token has expired');
    }

    try {
      localStorage.setItem('activeUser', JSON.stringify(user));
      console.log('user saved successfully in local storage');
    } catch (error) {
      console.log('Unable to save user in local storage', error);
      throw new Error('Failed to save user in localStorage');
    }

    this.activeUserSubject.next(JSON.stringify(user));
  };

  confirmUserLoginState():boolean{
    let activeUser = localStorage.getItem('activeUser');
    if(!activeUser) return false;
    
    let token = activeUser ? JSON.parse(activeUser).token : null;
    if(!token) return false;

    let decodedToken = StringHelper.decodeToken(token);

    let now = new Date();
    let tokenExpiryDate = new Date(decodedToken.exp * 1000);

    if(tokenExpiryDate <= now) return false;
    
    return true
  }

}