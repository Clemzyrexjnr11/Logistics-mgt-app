import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addTokenHeader(request));
  }

  addTokenHeader(request: HttpRequest<any>): HttpRequest<any> {
    const user = localStorage.getItem('activeUser');
    if (!user) return request;

    let token: string | undefined;
    try {
      token = JSON.parse(user).token;
    } catch (e) {
      return request;
    }

    if (!token) {
      console.log('Request header has no token');
      return request;
    }

    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}