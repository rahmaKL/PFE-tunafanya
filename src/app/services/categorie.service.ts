import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// @ts-ignore
import categories from '../data/categories.json';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  categories;
  api_prefix: string = "http://localhost:3000/categorie";
  private headerrs = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { 
    this.categories = categories;
  }



  getCategories(): [] {
    return this.categories;
  }

  deleteCat(id: string): Observable<any>{
    return this.http.get(`http://localhost:3000/categorie/delete/${id}`);
   }

   deletessCat(id: string): Observable<any>{
    return this.http.get(`http://localhost:3000/sous_cat/delete/${id}`);
   }







}
