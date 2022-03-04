import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  url='https://pets-vet.azurewebsites.net/'

  constructor(private http: HttpClient) { }

  getMoscotas(){
    return this.http.get<any>(this.url+'pets')
  }

  getMoscota(id: string | number){
    return this.http.get<any>(this.url+'pets/'+id)
  }

  postMascota(Pets:any){
    return this.http.post(this.url, Pets)
  }

}
