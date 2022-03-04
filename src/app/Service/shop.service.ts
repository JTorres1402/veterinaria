import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  url='https://pets-vet.azurewebsites.net/'

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>(this.url+'shop')
  }

}