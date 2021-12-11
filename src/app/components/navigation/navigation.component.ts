import { Component, OnInit } from '@angular/core';
import { AuthService, IUser } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(private readonly authService: AuthService) {}

  public _isLoggedIn = (): boolean => this.authService.isLoggedIn();
  public _logout = () => this.authService.logout();

  ngOnInit(): void {
    console.log('navigation re render ', this._isLoggedIn());
  }
}
