import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from '../services/user-service.service';
import { Subject } from 'rxjs';
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
