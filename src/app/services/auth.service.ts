import { Injectable } from '@angular/core';
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
  constructor() {}

  setUserInfo = (token: string) => {
    window.localStorage.setItem('token', token);
    window.localStorage.setItem('userInfo', JSON.stringify(jwtDecode(token)));
  };

  getUserInfo = (): IUserInfo | null => {
    const userInfoStr = window.localStorage.getItem('userInfo') ?? undefined;
    if (!!userInfoStr) {
      const userInfo: IUserInfo = JSON.parse(userInfoStr);
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
    window.localStorage.removeItem('userInfo');
    window.localStorage.removeItem('token');
  };
}
