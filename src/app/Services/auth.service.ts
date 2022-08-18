import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, shareReplay, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn;
  readonly BaseUrl = environment.BaseUrl;
  apiUrlTable = 'auth';

  constructor(private router: Router, private httpClient: HttpClient) {

    if(sessionStorage.getItem('isLoggedIn')){
      this.isLoggedIn = sessionStorage.getItem('isLoggedIn');
    }
    else {
      this.isLoggedIn = false;
    }
  }

    signout() {
      localStorage.removeItem('isLoggedIn');
      sessionStorage.removeItem('isLoggedIn');
      localStorage.clear();
      sessionStorage.clear();
      this.isLoggedIn = false;
      this.router.navigate(['/login']);
    }


  signIn(data: any): Observable<any>{
    return this.httpClient.post(this.BaseUrl  + this.apiUrlTable + '/login' , JSON.stringify(data), httpOptions).pipe(
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
