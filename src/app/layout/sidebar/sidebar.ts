import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
})
export class Sidebar {
  menuAbierto = false;
  userMenuAbierto = false;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  toggleUserMenu() {
    this.userMenuAbierto = !this.userMenuAbierto;
  }

  verPerfil() {
    console.log('Ir al perfil...');
  }

  cerrarSesion() {
    console.log('Cerrar sesión...');
    // Aquí luego integras tu logout real
  }

  // Perfil de usuario (simulado por ahora)
  usuario = {
    nombre: 'Invitado',
    rol: 'Miembro',
    foto: null,
  };
}
