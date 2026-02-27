import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-jovenes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jovenes.html',
  styleUrl: './jovenes.scss',
})
export class Jovenes {
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

  anios = [2024, 2025, 2026, 2027, 2028];

  mesSeleccionado = 'Enero';
  anioSeleccionado = 2026;
  balanceActual: number = 0;
  totalTransacciones: number = 0;
  promedioMensual: number = 0;

  nuevaTransaccion() {
    console.log('Abrir modal de Nueva Transacción');
  }

  transacciones = [
    { fecha: '14/1/2025', descripcion: 'Comisión por ventas', tipo: 'Ingreso', monto: 12500 },
    { fecha: '13/1/2025', descripcion: 'Campaña publicitaria', tipo: 'Gasto', monto: 8500 },
    { fecha: '12/1/2025', descripcion: 'Venta de servicios', tipo: 'Ingreso', monto: 25000 },
    { fecha: '11/1/2025', descripcion: 'Nómina mensual', tipo: 'Gasto', monto: 45000 },
    { fecha: '10/1/2025', descripcion: 'Incentivos equipo', tipo: 'Gasto', monto: 3200 },
  ];

  chart: any;

  ngOnInit() {
    this.cargarGrafica();
  }

  cambiarMes(mes: string) {
    this.mesSeleccionado = mes;
    this.cargarGrafica();
  }

  cargarGrafica() {
    if (this.chart) {
      this.chart.destroy();
    }

    const ingresos = 24000;
    const gastos = 15200;

    this.chart = new Chart('chartIngresosGastos', {
      type: 'bar',
      data: {
        labels: [this.mesSeleccionado],
        datasets: [
          {
            label: 'Ingresos',
            data: [ingresos],
            backgroundColor: '#1a73e8',
          },
          {
            label: 'Gastos',
            data: [gastos],
            backgroundColor: '#d9534f',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }

  departamentos = [
    { id: 'jovenes', nombre: 'Jóvenes', icon: '🌟' },
    { id: 'damas', nombre: 'Damas', icon: '❤️' },
    { id: 'caballeros', nombre: 'Caballeros', icon: '👨' },
    { id: 'ninos', nombre: 'Niños', icon: '🧒' },
  ];

  // Departamento actual
  departamentoSeleccionado = 'jovenes';

  // Datos dinámicos por departamento
  datosPorDepartamento: any = {
    jovenes: {
      balance: 45680.5,
      transacciones: 156,
      promedio: 10400,
    },
    damas: {
      balance: 37800,
      transacciones: 89,
      promedio: 7200,
    },
    caballeros: {
      balance: 51200,
      transacciones: 120,
      promedio: 9800,
    },
    ninos: {
      balance: 18200,
      transacciones: 40,
      promedio: 3100,
    },
  };

  // Método para cambiar pestaña
  cambiarDepartamento(id: string) {
    this.departamentoSeleccionado = id;

    // Aquí actualizas la info:
    const data = this.datosPorDepartamento[id];

    this.balanceActual = data.balance;
    this.totalTransacciones = data.transacciones;
    this.promedioMensual = data.promedio;

    // Y también cambiarías la tabla de transacciones:
    this.transacciones = this.obtenerTransaccionesDelDep(id);
  }

  obtenerTransaccionesDelDep(dep: string) {
    // TEMPORAL — puedes reemplazarlo con datos reales
    return [
      { fecha: '14/1/2025', descripcion: 'Pago ejemplo', tipo: 'Ingreso', monto: 1500 },
      { fecha: '12/1/2025', descripcion: 'Compra ejemplo', tipo: 'Gasto', monto: 800 },
    ];
  }
}
