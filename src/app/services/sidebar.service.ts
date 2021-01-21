import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [{
    titulo: 'Control',
    icono: 'mdi mdi-account-convert',
    submenu: [
      { titulo: 'Vista General', url: ''},
      { titulo: 'ProgressBar', url: 'progress'},
      { titulo: 'Gráficas', url: 'grafica1'},
      { titulo: 'Promesas', url: 'promesas'},
      { titulo: 'RXJS', url: 'rxjs'},
      { titulo: 'Alumnos', url: 'agregarAlumno'},
      { titulo: 'Profesores', url: 'agregarProfesor'},
      { titulo: 'Empleados', url: 'agregarEmpleados'},
      { titulo: 'Grupos', url: 'agregarGrupo'},
      { titulo: 'Materias', url: 'agregarMaterias'}
    ],


  },
  {
    titulo: 'Consultas',
    icono: 'mdi mdi-account',
    submenu: [
      { titulo: 'Historial', url: 'historial'},
      { titulo: 'Alumnos', url: 'alumnos'},
      { titulo: 'Profesores', url: 'profesores'},
      { titulo: 'Empleados', url: 'empleados'},
      { titulo: 'Materias', url: 'materias'},
      { titulo: 'Grupos', url: 'grupos'},
    ],


  },
];

menu2: any[] = [{
  titulo: 'Control',
  icono: 'md mdi-gauge',
  submenu: [
    { titulo: 'Vista General', url: ''},
    { titulo: 'ProgressBar', url: 'progress'},
    { titulo: 'Gráficas', url: 'grafica1'},
    { titulo: 'Promesas', url: 'promesas'},
    { titulo: 'RXJS', url: 'rxjs'},
    { titulo: 'Alumnos', url: 'agregarAlumno'},
    { titulo: 'Profesores', url: 'agregarProfesor'},
    { titulo: 'Grupos', url: 'agregarGrupo'},
    { titulo: 'Materias', url: 'agregarMaterias'}
  ],


},
];

  constructor() { }
}
