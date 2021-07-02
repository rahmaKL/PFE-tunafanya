import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products;

  constructor() {
    this.products = [];
  }

  getProducts(): [] {
    return this.products;
  }

  addProduct(product): any {
    return this.products.push(product);
  }

  deleteProduct(id: number): any {
    this.products = this.products.filter((p) => {
      return p.id != id;
    });
    return this.products;
  }
}

