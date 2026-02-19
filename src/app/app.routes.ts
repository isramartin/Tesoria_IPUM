import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { ReportesInformes } from './pages/reportes-informes/reportes-informes';
import { Movimientos } from './pages/movimientos/movimientos';

export const routes: Routes = [

    {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'reportes', component: ReportesInformes },
      { path: 'movimientos', component: Movimientos },
      // después agregamos los demás módulos
    ]
  }


];
