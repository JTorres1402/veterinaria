import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { PublicaComponent } from './publica/publica.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: '',component: InicioComponent},

  {path: 'adopta', component: ListPetsComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'publicar', component: PublicaComponent},
  {path: 'agenda', component:AgendaComponent},
  {path: 'mascota/:id', component: ViewComponent},
  {path:'**', component: InicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
