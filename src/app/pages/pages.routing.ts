import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import { AgregarProfesorComponent } from './agregar-profesor/agregar-profesor.component';
import { AgregarGruposComponent } from './agregar-grupos/agregar-grupos.component';
import { AgregarMateriasComponent } from './agregar-materias/agregar-materias.component';
import { AlumnosComponent } from './consultas/alumnos/alumnos.component';
import { HistorialAlumnoComponent } from './consultas/historial-alumno/historial-alumno.component';
import { ProfesoresComponent } from './consultas/profesores/profesores.component';
import { MateriasComponent } from './consultas/materias/materias.component';
import { EmpleadosComponent } from './consultas/empleados/empleados.component';
import { AgregarempleadoComponent } from './agregarempleado/agregarempleado.component';
import { GruposComponent } from './consultas/grupos/grupos.component';
const routes: Routes = [
  {path: 'dashboard',
   component: PagesComponent,
   children: [
    {path: '', component: DashboardComponent, data: {titulo: 'Dashboard'} },
    {path: 'grafica1' , component: Grafica1Component, data: {titulo: 'Gráfica'}},
    {path: 'progress', component: ProgressComponent, data: {titulo: 'Progreso'}},
    {path: 'settings', component: AccountSettingsComponent, data: {titulo: 'Ajustes de Cuenta'}},
    {path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}},
    {path: 'rxjs', component: RxjsComponent, data: {titulo: 'RXJS'}},
    {path: 'agregarAlumno', component: AgregarAlumnoComponent, data: {titulo: 'Alumnos'}},
    {path: 'agregarGrupo', component: AgregarGruposComponent, data: {titulo: 'Grupos'}},
    {path: 'agregarMaterias', component: AgregarMateriasComponent, data: {titulo: 'Materias'}},
    {path: 'agregarProfesor', component: AgregarProfesorComponent, data: {titulo: 'Profesores'}},
    {path: 'agregarEmpleados', component: AgregarempleadoComponent, data: {titulo: 'Empleados'}},

    // consultas
    {path: 'alumnos', component: AlumnosComponent, data: {titulo: 'Alumnos'}},
    {path: 'historial', component: HistorialAlumnoComponent, data: {titulo: 'Historial de Alumno'}},
    {path: 'profesores', component: ProfesoresComponent, data: {titulo: 'Profesores'}},
    {path: 'empleados', component: EmpleadosComponent, data: {titulo: 'Empleados'}},
    {path: 'materias', component: MateriasComponent, data: {titulo: 'Materias'}},
    {path: 'grupos', component: GruposComponent, data: {titulo: 'Grupos'}}
   ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class PagesRoutingModule { }
