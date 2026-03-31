import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  usuario: Usuario = new Usuario('', '');
  edadUno: number | null = null;
  edadDos: number | null = null;
  suma: number | null = null;
  promedio: number | null = null;

  calcular(): void {
    if (this.edadUno === null || this.edadDos === null) {
      return;
    }

    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;
  }

  limpiar(): void {
    this.edadUno = null;
    this.edadDos = null;
    this.suma = null;
    this.promedio = null;
  }
}
