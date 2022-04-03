import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  public rows = [
    { a: 1, b: 2 },
    { a: 2, c: 3 },
  ];

  public columns = ['abc', 'def'];

  constructor() {}

  ngOnInit(): void {}
}
