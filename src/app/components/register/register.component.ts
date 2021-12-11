import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UsersService],
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UsersService) {}

  public userName: string = '';
  public password: string = '';

  ngOnInit(): void {}

  public register = () => {
    const user: IUser = {
      userName: this.userName,
      password: this.password,
    };

    this.userService.register(user).then((res) => {});
  };
}
