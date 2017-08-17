import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {UrlService} from "./url.service";

@Injectable()
export class FoodService {
  url:string;
  modelo='Food';
  constructor(private _http:Http,private _urlService:UrlService){
    this.url=this._urlService.url+this.modelo;
  }

}