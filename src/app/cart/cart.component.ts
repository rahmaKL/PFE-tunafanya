import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';

export class Produit {

  constructor(
    public id: number,
    public libelle: string,
    public prix: number,

    public is_deleted: boolean,
    public createdAt: string,
    public updatedAt: string,

  ) { }
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getProducts();

  }

  delete(id: any) {
    this.cartService.deleteProduct(id);
    this.cartProducts = this.cartService.getProducts();
  }
}
