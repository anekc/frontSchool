import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponetsModule } from '../components/componets.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import { AgregarProfesorComponent } from './agregar-profesor/agregar-profesor.component';
import { AgregarGruposComponent } from './agregar-grupos/agregar-grupos.component';
import { AgregarMateriasComponent } from './agregar-materias/agregar-materias.component';
import { HttpClientModule } from '@angular/common/http';
import { AlumnosComponent } from './consultas/alumnos/alumnos.component';
import { HistorialAlumnoComponent } from './consultas/historial-alumno/historial-alumno.component';
import { ProfesoresComponent } from './consultas/profesores/profesores.component';
import { MateriasComponent } from './consultas/materias/materias.component';
import { EmpleadosComponent } from './consultas/empleados/empleados.component';
import { AgregarempleadoComponent } from './agregarempleado/agregarempleado.component';


@NgModule({
  declarations: [
    PagesComponent,
    Grafica1Component,
    ProgressComponent,
    DashboardComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    AgregarAlumnoComponent,
    AgregarProfesorComponent,
    AgregarGruposComponent,
    AgregarMateriasComponent,
    AlumnosComponent,
    HistorialAlumnoComponent,
    ProfesoresComponent,
    MateriasComponent,
    EmpleadosComponent,
    AgregarempleadoComponent,
  ],
   exports: [
    PagesComponent,
    Grafica1Component,
    ProgressComponent,
    DashboardComponent,
    AccountSettingsComponent
],
  imports: [
  CommonModule,
  SharedModule,
  AppRoutingModule,
  FormsModule ,
  ComponetsModule,
  ReactiveFormsModule,
  HttpClientModule

]
})
export class PagesModule { }
