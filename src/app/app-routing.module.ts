import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ListarComponent } from './pages/listar/listar.component';

const routes: Routes = [
  {path:"pagina/acerca", component:AcercaComponent},
  {path:"pagina/lista", component:ListarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
