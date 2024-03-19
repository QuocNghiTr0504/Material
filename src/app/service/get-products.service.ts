import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class GetProductsService implements OnInit {

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  private REST_API_PRODUCTS = 'http://localhost:3000';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor( private http: HttpClient) { }
  ngOnInit(): void {

  }

  public getProduct(): Observable<Product[]>{
    const url = `${this.REST_API_PRODUCTS}/products`;
    return this.http.get<Product[]>(url, this.httpOptions);
  }
}
