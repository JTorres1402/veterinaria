import { Component, OnInit } from '@angular/core';
import { PetsService } from '../Service/pets.service';
import { Pets } from '../Model/pets-model';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.scss']
})
export class ListPetsComponent implements OnInit {

  pets: Pets[]

  constructor(private api: PetsService) { }

  ngOnInit(): void {
    this.getMascota()
  }

  getMascota(){
    this.api.getMoscotas().subscribe(data =>{
      this.pets = data
    })
  }

}
