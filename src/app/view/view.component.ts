import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { PetsService } from '../Service/pets.service';
import { Pets } from '../Model/pets-model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  pets: Pets[]
  nombre: Pets 
  id: number
  constructor(private router: Router, private activeRoute: ActivatedRoute, private api: PetsService) { }

  ngOnInit(): void {
      const id_entrada = this.activeRoute.snapshot.params.id
      this.id = id_entrada;
      if(id_entrada){
        this.api.getMoscota(id_entrada).subscribe(data => {
          this.pets = data
          this.nombre = data
        })
      }
  }

  boto(){
   console.log("has adoptado a ")
  }

}
