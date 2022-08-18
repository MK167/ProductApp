import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, shareReplay, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  readonly BaseUrl = environment.BaseUrl;
  apiUrlTable = 'products';


  constructor(private httpClient: HttpClient) { }

  // Get All
  GetAll(): Observable<any> {
    return this.httpClient.get(this.BaseUrl + this.apiUrlTable)
      .pipe(
        shareReplay(),
        catchError(this.handleError)
      );
  }

  Getasingleproduct(id: any) {
    return this.httpClient.get(`${this.BaseUrl + this.apiUrlTable}/${id}`)
      .pipe(
        shareReplay(),
        catchError(this.handleError)
      );
  }

  AddProduct(data: any) {
    return this.httpClient.post(this.BaseUrl + this.apiUrlTable, JSON.stringify(data), httpOptions)
      .pipe(
        shareReplay(),
        catchError(this.handleError)
      );
  }

  // Handle API errors << You Can Add this Function as an Interceptor >>
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
