import { Component, OnInit } from '@angular/core';
import { ShopService } from '../Service/shop.service';
import { Products } from '../Model/products-model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {

  products: Products []

  constructor(private api: ShopService,  private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.api.getProduct().subscribe(data =>{
      this.products = data
    })
  }

}
