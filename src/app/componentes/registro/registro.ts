import { Component } from '@angular/core';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  usuario: Usuario = new Usuario('', '');
  mensaje = '';

  registrar(): void {
    if (!this.usuario.nombre || !this.usuario.clave) {
      this.mensaje = 'Complete nombre y clave';
      return;
    }

    const usuariosGuardados = localStorage.getItem('usuarios');
    const usuarios: Usuario[] = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];

    const usuarioExistente = usuarios.find((usuario) => usuario.nombre === this.usuario.nombre);

    if (usuarioExistente) {
      this.mensaje = 'El usuario ya existe';
      return;
    }

    usuarios.push(new Usuario(this.usuario.nombre, this.usuario.clave));
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    this.usuario = new Usuario('', '');
    this.mensaje = 'Usuario registrado correctamente';
  }
}
