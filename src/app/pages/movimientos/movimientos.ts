import { CommonModule, CurrencyPipe, NgClass, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movimientos',
  imports: [
    CommonModule, // <-- ngIf, ngFor, pipes básicos
    NgClass, // <-- para usar [ngClass]
    TitleCasePipe, // <-- para usar | titlecase
    CurrencyPipe, // <-- para usar | currency
  ],
  templateUrl: './movimientos.html',
  styleUrl: './movimientos.scss',
})
export class Movimientos {
  modo: 'ingresos' | 'gastos' = 'ingresos';
  meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  mesSeleccionado = 'Enero';

  totalSeleccionado = 64400;

  listaCategorias = [
    { nombre: 'Eventos', monto: 25200, porcentaje: 39.1 },
    { nombre: 'Construcción', monto: 14000, porcentaje: 21.7 },
    { nombre: 'Misiones', monto: 10700, porcentaje: 16.6 },
    { nombre: 'Educación', monto: 7400, porcentaje: 11.5 },
    { nombre: 'Obra Social', monto: 4200, porcentaje: 6.5 },
    { nombre: 'Equipamiento', monto: 2900, porcentaje: 4.5 },
  ];

  listaIngresos = [
    { nombre: 'Talentos', monto: 42000, icono: '🎁', color: 'amarillo' },
    { nombre: 'Ofrendas', monto: 25600, icono: '💙', color: 'azul' },
    { nombre: 'Ingresos Externos', monto: 15800, icono: '📈', color: 'verde' },
    { nombre: 'Total Ingresos', monto: 83400, icono: '💲', color: 'morado' },
  ];

  transacciones = [
    {
      nombre: 'Alquiler de Sonido - Retiro',
      categoria: 'Jóvenes - Eventos',
      fecha: '2024-01-20',
      monto: 5800,
      tipo: 'ingreso',
    },
    {
      nombre: 'Material para Retiro Espiritual',
      categoria: 'Jóvenes - Materiales',
      fecha: '2024-01-25',
      monto: 4200,
      tipo: 'ingreso',
    },
    {
      nombre: 'Transporte para Actividad',
      categoria: 'Jóvenes - Transporte',
      fecha: '2024-01-30',
      monto: 5200,
      tipo: 'gasto',
    },
    {
      nombre: 'Transporte para Actividad',
      categoria: 'Jóvenes - Transporte',
      fecha: '2024-01-30',
      monto: 5200,
      tipo: 'gasto',
    },
  ];

  ingresos: any[] = [];
  gastos: any[] = [];

  // ngOnInit() {
  //   this.ingresos = this.transacciones.filter((t) => t.tipo === 'ingreso');
  //   this.gastos = this.transacciones.filter((t) => t.tipo === 'gasto');
  // }
  get transaccionesFiltradas() {
    return this.transacciones.filter((t) => t.tipo === this.modo.slice(0, -1));
  }

  departamentos = [
    { nombre: 'Jóvenes', monto: '$15,200', porcentaje: 28.3 },
    { nombre: 'Damas', monto: '$11,500', porcentaje: 21.4 },
    { nombre: 'Caballeros', monto: '$18,200', porcentaje: 33.8 },
    { nombre: 'Niños', monto: '$8,900', porcentaje: 16.5 },
  ];

  mostrarModal = false;

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }
}
