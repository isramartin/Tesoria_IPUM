import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reportes-informes',
  imports: [CommonModule, FormsModule],
  templateUrl: './reportes-informes.html',
  styleUrl: './reportes-informes.scss',
})
export class ReportesInformes {
  @ViewChild('graficoIngresos') graficoIngresos!: ElementRef;
  @ViewChild('graficoPie') graficoPie!: ElementRef;
  @ViewChild('graficoDeptos') graficoDeptos!: ElementRef;
  @ViewChild('graficoEvolucion') graficoEvolucion!: ElementRef;

  meses = ['Enero', 'Febrero', 'Marzo'];
  anios = [2024, 2025, 2026];
  mesSeleccionado = 'Febrero';
  anioSeleccionado = 2026;

  totalIngresos = '278.400';
  totalGastos = '176.500';
  balanceGeneral = '165.191,50';
  transacciones = 500;

  ingresosTalentos = '144.000';
  ingresosOfrendas = '88.200';
  ingresosExternos = '46.200';

  departamentos = [
    {
      nombre: 'Jóvenes',
      crecimiento: 18.5,
      balance: '45.680,5',
      transacciones: 156,
      estado: 'Creciendo',
    },
    {
      nombre: 'Damas',
      crecimiento: 12.3,
      balance: '38.420,75',
      transacciones: 134,
      estado: 'Creciendo',
    },
    {
      nombre: 'Caballeros',
      crecimiento: 9.8,
      balance: '52.340',
      transacciones: 112,
      estado: 'Creciendo',
    },
    {
      nombre: 'Niños',
      crecimiento: 14.2,
      balance: '28.750,25',
      transacciones: 98,
      estado: 'Creciendo',
    },
  ];

  ngAfterViewInit() {
    this.crearGraficoIngresos();
    this.crearGraficoPie();
    this.crearGraficoDeptos();
    this.crearGraficoEvolucion();
  }

  crearGraficoIngresos() {
    new Chart(this.graficoIngresos.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo'],
        datasets: [
          { label: 'Ingresos', data: [85000, 90000, 110000], backgroundColor: '#000' },
          { label: 'Gastos', data: [54000, 58000, 62000], backgroundColor: '#444' },
          { label: 'Balance Neto', data: [30000, 31000, 35000], backgroundColor: '#777' },
        ],
      },
    });
  }

  crearGraficoPie() {
    new Chart(this.graficoPie.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Talentos', 'Ofrendas', 'Ingresos Externos'],
        datasets: [
          {
            data: [52, 32, 16],
            backgroundColor: ['#000', '#444', '#777'],
          },
        ],
      },
    });
  }

  crearGraficoDeptos() {
    new Chart(this.graficoDeptos.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Jóvenes', 'Damas', 'Caballeros', 'Niños'],
        datasets: [
          {
            data: [50000, 42000, 58000, 30000],
            backgroundColor: '#000',
          },
        ],
      },
      options: { indexAxis: 'y' },
    });
  }

  crearGraficoEvolucion() {
    new Chart(this.graficoEvolucion.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo'],
        datasets: [
          {
            label: 'Jóvenes',
            data: [9000, 10000, 13000],
            backgroundColor: '#000',
            borderRadius: 6,
          },
          {
            label: 'Damas',
            data: [6800, 7000, 9000],
            backgroundColor: '#000',
            borderRadius: 6,
          },
          {
            label: 'Caballeros',
            data: [4000, 3800, 14500],
            backgroundColor: '#000',
            borderRadius: 6,
          },
          {
            label: 'Niños',
            data: [8000, 8500, 6500],
            backgroundColor: '#000',
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              pointStyle: 'rect',
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true, // <--- Aquí sí es válido
            grid: {
              color: '#e5e5e5',
            },
          },
        },
      },
    });
  }
}
