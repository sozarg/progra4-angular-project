import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Bienvenido } from './componentes/bienvenido/bienvenido';
import { Login } from './componentes/login/login';
import { Error } from './componentes/error/error';

@NgModule({
  declarations: [
    App,
    Bienvenido,
    Login,
    Error
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
