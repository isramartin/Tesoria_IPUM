import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
    standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
})
export class Sidebar {
  menuAbierto = false;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  userMenuAbierto = false;

  toggleUserMenu() {
    console.log('click detectado');
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
