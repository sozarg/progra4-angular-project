import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuario: Usuario = new Usuario('', '');
  mensaje = '';

  constructor(private router: Router) {}

  ingresar(): void {
    if (!this.usuario.nombre || !this.usuario.clave) {
      this.mensaje = 'Complete nombre y clave';
      return;
    }

    const usuariosGuardados = localStorage.getItem('usuarios');
    const usuarios: Usuario[] = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];

    const usuarioEncontrado = usuarios.find((usuario) => {
      return usuario.nombre === this.usuario.nombre && usuario.clave === this.usuario.clave;
    });

    if (usuarioEncontrado) {
      localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioEncontrado));
      this.mensaje = 'Login correcto';
      this.router.navigate(['/bienvenido']);
      return;
    }

    this.mensaje = 'Usuario o clave incorrectos';
  }
}
