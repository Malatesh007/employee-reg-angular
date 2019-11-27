import { Injectable } from '@angular/core';

@Injectable()
export class UrlConstant {

  public production = false;

  public demo = true;
  SERVER_PORT: string;
  public urlOrigin: string = window.location.origin;
  public mcqType = 'MCQ';
  public uriSplit: string = window.location.href.split('/')[3];



  constructor() {
    this.SERVER_PORT = this.urlOrigin;
  }
}