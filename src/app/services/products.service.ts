import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private readonly httpClient: HttpClient) {}

  getProducts = () => {
    return new Promise((res, rej) => {
      this.httpClient.get('http://localhost:3000/products').subscribe({
        complete: () => {
          console.log('fetching products completed');
        },
        error: rej,
        next: res,
      });
    });
  };
}
