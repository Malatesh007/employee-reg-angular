
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UrlConstant {
  public production = false;
  public demo = true;
  public urlOrigin: string = window.location.origin;
  public uriSplit: string = window.location.href.split('/')[3];
  public static SERVER_PORT = 'http://localhost:8087/api/';
  constructor() {
    // this.SERVER_PORT = 'http://localhost:8087/api/';
  }
}