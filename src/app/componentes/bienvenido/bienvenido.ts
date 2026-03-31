import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  standalone: false,
  templateUrl: './bienvenido.html',
  styleUrl: './bienvenido.css',
})
export class Bienvenido implements OnInit {
  nombreUsuarioLogueado = 'ninguno';
  edadUno: number | null = null;
  edadDos: number | null = null;
  suma: number | null = null;
  promedio: number | null = null;

  ngOnInit(): void {
    const usuarioLogueado = localStorage.getItem('usuarioLogueado');

    if (usuarioLogueado) {
      this.nombreUsuarioLogueado = JSON.parse(usuarioLogueado).nombre;
    }
  }

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
