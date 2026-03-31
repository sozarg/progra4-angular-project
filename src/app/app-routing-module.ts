import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bienvenido } from './componentes/bienvenido/bienvenido';
import { Login } from './componentes/login/login';
import { Registro } from './componentes/registro/registro';
import { Error } from './componentes/error/error';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenido',
    pathMatch: 'full'
  },
  {
    path: 'bienvenido',
    component: Bienvenido
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'registro',
    component: Registro
  },
  {
    path: 'error',
    component: Error
  },
  {
    path: '**',
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
