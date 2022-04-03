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
  public age: number = -1;
  public firstName: string = '';
  public lastName: string = '';

  public registrationSuccess: boolean = false;
  public registrationFailed: boolean = false;

  ngOnInit(): void {}

  public register = () => {
    const user: IUser = {
      userName: this.userName,
      password: this.password,
      age: this.age,
      firstName: this.firstName,
      lastName: this.lastName,
    };

    this.userService
      .register(user)
      .then((res) => {
        this.registrationSuccess = true;
        this.registrationFailed = false;
      })
      .catch(() => {
        this.registrationFailed = true;
        this.registrationSuccess = false;
      });
  };
}
