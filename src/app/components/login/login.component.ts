import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/app.component';
import { UsersService } from 'src/app/services/users.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsersService],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UsersService) {}

  public userName: string = '';
  public password: string = '';

  private userInfo: { token: string } = { token: '' };

  ngOnInit(): void {}

  public login = () => {
    const user: IUser = {
      userName: this.userName,
      password: this.password,
    };

    this.userService
      .login(user)
      .then((res: { token: string }) => {
        this.userInfo = res;
        window.localStorage.setItem('token', res.token);
        window.localStorage.setItem(
          'userInfo',
          JSON.stringify(jwtDecode(res.token))
        );
      })
      .catch(alert);
  };
}
