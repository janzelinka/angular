import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthRoleGuardService implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const expectedRoleId = route.data['expectedRole'];
    const userInfo = this.authService.getUserInfo();

    console.log(route.data, expectedRoleId, userInfo?.userInfo.role?.id);
    if (userInfo) {
      return userInfo.userInfo.role?.id === expectedRoleId;
    }

    return false;
  }
}
