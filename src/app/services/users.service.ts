import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  constructor(public http: HttpClient) {}

  public register = async (user: any) => {
    return new Promise((res, rej) => {
      this.http.post('http://localhost:3000/login/register', user).subscribe({
        next: (data: any) => {
          res(data);
        },
        complete: () => {
          console.log('completed');
        },
        error: (err: any) => {
          rej(err);
        },
      });
    });
  };

  public login = async (user: any): Promise<{ token: string }> => {
    return new Promise((res, rej) => {
      this.http.post('http://localhost:3000/login', user , { withCredentials: true}).subscribe({
        next: (data: any) => {
          res(data);
        },
        complete: () => {
          console.log('completed');
        },
        error: (err: any) => {
          rej(err);
        },
      });
    });
  };
}
