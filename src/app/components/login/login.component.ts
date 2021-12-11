import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import jwtDecode from 'jwt-decode';
import { AuthService, IUser } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsersService, AuthService],
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService
  ) {}

  public userName: string = '';
  public password: string = '';

  ngOnInit(): void {}

  public login = () => {
    const { userService, authService, userName, password } = this;

    const user: IUser = {
      userName: userName,
      password: password,
    };

    userService
      .login(user)
      .then((res: { token: string }) => {
        authService.setUserInfo(res.token);
      })
      .catch(alert);
  };
}
