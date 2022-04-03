import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwtDecode from 'jwt-decode';
export interface IUser {
  userName: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  password: string;
  role?: {
    id: number;
    roleName?: string;
  };
}

interface IUserInfo {
  userInfo: IUser;
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly cookieService: CookieService) {}

  getUserInfo = (): IUserInfo | null => {
    const userInfoStr = this.cookieService.get('token');
    if (!!userInfoStr) {
      const userInfo: IUserInfo = jwtDecode(userInfoStr);
      return userInfo;
    }
    return null;
  };

  isLoggedIn = (): boolean => {
    const userInfo = this.getUserInfo();
    if (!userInfo) {
      return false;
    }
    return Date.now() < userInfo.exp * 1000;
  };

  logout = () => {
    this.cookieService.delete('token');
  };
}
