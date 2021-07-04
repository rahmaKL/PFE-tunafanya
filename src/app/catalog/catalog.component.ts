
import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';
import {CartService} from '../services/cart.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategorieService} from '../services/categorie.service';

export class Produit {
  constructor(
    public id: string,
    public libelle: string,
    public marque: string,
     public image: string,
    public prix: number,

   ) 
    {}
}
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  categories: [];
  products: [];


  // products:[];
  constructor(private fb: FormBuilder, private http: HttpClient,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categorieService: CategorieService
   ) {  
 
}

ngOnInit(): void {
  this.categories = this.categorieService.getCategories();
  this.products = this.productService.getProducts();
  
}
addToCart(product){
  this.cartService.addProduct(product);
  this.router.navigate(['/cart']);
}




//  Affichage produits
//  getProduit() {
//   this.http.get('http://localhost:3000/produit/getAll')
//     .subscribe(response => {
//       console.log(response);
//      this.product = response as any;
//     });
// }

}
