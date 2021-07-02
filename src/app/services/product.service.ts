import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// @ts-ignore
import products from '../data/products.json';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products;


  api_prefix: string = "http://localhost:3000/produit";
  private headerrs = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient ) { 
    this.products = products;
  }

getProducts(): [] {
    return this.products;
  }

  addProduct(product): any {
    return this.products.push(product);
  }

  updateProductt(id, values): any {
    let product = this.products.find((p) => {
      return p.id == id;
    });
    product.name = values.name;
    product.price = values.price;
    product.category = values.category;
    product.description = values.description;
    return this.products;
  }

  showProduct(id): any {
    return this.products.find((p) => {
      return p.id == id;
    });
  }

  deleteProductt(id: number): any {
    this.products = this.products.filter((p) => {
      return p.id != id;
    });
    return this.products;
  }








  deleteProduct(id: string): Observable<any>{
    return this.http.get(`http://localhost:3000/produit/delete/${id}`);
   }


  updateProduct(id: number) {
    const url = `${this.api_prefix}/updateP/${id}`;
    return this.http.put(url, { headers: this.headerrs });
  }


  createProduct(id: string) {
    const url = `${this.api_prefix}/createP/${id}`;
    return this.http.post(url, { headers: this.headerrs },{withCredentials:true});
  }





}
