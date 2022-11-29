import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ToysService {
  private readonly urlApi: string = "https://localhost:7170/api/";
  constructor(private http: HttpClient) { }

  getToys(): Observable<any>{
    return this.http.get(`${this.urlApi}products`);
  }

  getToyById(id: number): Observable<any>{
    return this.http.get(`${this.urlApi}products/${id}`);
  }

  addToy(toy: Product): Observable<any>{
    return this.http.post(`${this.urlApi}products/`, toy);
  }

  updateToy(toy: Product): Observable<any>{
    return this.http.put(`${this.urlApi}products/`, toy);
  }

  deleteToy(id?: number): Observable<any>{
    return this.http.delete(`${this.urlApi}products/${id}`);
  }
}
