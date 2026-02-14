import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { ReportesInformes } from './pages/reportes-informes/reportes-informes';

export const routes: Routes = [

    {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'reportes', component: ReportesInformes },
      // después agregamos los demás módulos
    ]
  }


];
