import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Sidebar, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  sidebarClosed = false;

  sidebarMini = false;

  toggleSidebar() {
    // Si está abierto normal → pasa a mini
    if (!this.sidebarMini && !this.sidebarClosed) {
      this.sidebarMini = true;
      this.sidebarClosed = false;
    }
    // Si está en mini → se abre completo
    else if (this.sidebarMini) {
      this.sidebarMini = false;
      this.sidebarClosed = false;
    }
    // Si por alguna razón está cerrado del todo → se abre normal
    else {
      this.sidebarMini = false;
      this.sidebarClosed = false;
    }

    console.log('sidebarMini:', this.sidebarMini);
  }
}
