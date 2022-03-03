import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  url='https://pets-vet.herokuapp.com/'

  constructor(private http: HttpClient) { }

  getMoscota(){
    return this.http.get<any>(this.url+'pets')
  }

}
