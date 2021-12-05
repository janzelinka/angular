import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private httpClient: HttpClient // private userInfoService: UserInfoServiceService
  ) {}

  public userName: string = '';
  public password: string = '';

  ngOnInit(): void {}

  public register = () => {
    const user: IUser = {
      userName: this.userName,
      password: this.password,
      age: 12,
      firstName: 'abc',
      lastName: 'def',
    };

    this.httpClient.post('http://localhost:3000/login', user).subscribe({
      next: (data: any) => {
        console.log(data);
        // this.userInfoService.setToken(data);
      },
      complete: () => {
        console.log('completed');
      },
      error: (err) => {
        console.log('error', err);
      },
    });
  };
}
