import { Component, OnInit } from '@angular/core';
import { AuthService, IUser } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

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

  public isUserLoggedIn() {
    return this.authService.isLoggedIn();
  }

  public getUserInfo() {
    return this.authService.getUserInfo();
  }

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
        console.log(res);
      })
      .catch((error) => console.error(error));
  };
}
