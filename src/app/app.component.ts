import { Component } from '@angular/core';

export interface IUser {
  userName: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public user: IUser | null = null;
}
