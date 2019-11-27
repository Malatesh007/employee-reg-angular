import { Injectable } from '@angular/core';
import { share, tap, catchError, retry } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { UrlConstant } from './../url-constant/url-constant'
@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  url: string;
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private http: HttpClient, public urlConstant: UrlConstant) { }

  ngOnInit(): void {
  }



  handleError(error: HttpErrorResponse) {

  }

  getHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getObject(url: string): Observable<any> {
    return this.http.get(url, { headers: this.getHeader() });
  }

  getObjects(url: string) {
    // this.startLoader();
    console.log(url);
    return this.http.get(url, { headers: this.getHeader() });
  }


  addObject(url: string, body): Observable<any> {
    return this.http.post(url, body, { headers: this.getHeader() });
  }

  updateObject(url: string, body): Observable<any> {
    return this.http.put(url, body, { headers: this.getHeader() });
  }

  deleteObject(url: string): Observable<any> {
    return this.http.delete(url, { headers: this.getHeader() });
  }
}
