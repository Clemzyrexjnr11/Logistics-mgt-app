import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);
  const isUserloggedIn = authService.confirmUserLoginState();
  if (isUserloggedIn) {
    return true;
  } else {
    router.navigate(['/auth/login']);
  }
  return false;
};