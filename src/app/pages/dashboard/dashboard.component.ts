import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';
import { ProfesoresService } from '../../services/profesores.service';
import { MateriasService } from '../../services/materias.service';
import { ConsultasService } from '../../services/consultas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {
  public totalAlumnos = 0;
  public totalProfesores = 0;
  public totalEmpleados = 0;
  public alumnos: Alumno[];
  public materiaReprobada = [];
  public bestAVG = [];
  constructor(private AS: AlumnoService, private PS: ProfesoresService, private ES: MateriasService, private CS: ConsultasService) {
    this.alumnos = new Array<Alumno>();
  }

  ngOnInit(): void {
    this.AlumnosTotal();
    this.ProfesoresTotal();
    this.EmpleadosTotal();
    this.materiaRep();
    this.mejorPromedio();
  }

  AlumnosTotal(): void {
    this.AS.cargarAlumnos().subscribe((resp) => {
      console.log(resp);
      console.log(resp.result.rows);

      this.alumnos = resp.result.rows;
      this.totalAlumnos = this.alumnos.length;
      console.log(this.totalAlumnos);
    });
  }

  ProfesoresTotal(): void {
    this.PS.cargarProfesor().subscribe((resp) => {
      console.log(resp.result.rows.length);
      this.totalProfesores = resp.result.rows.length;
    });
  }

  EmpleadosTotal = () => {
    this.ES.getEmpleados().subscribe(resp => {
      this.totalEmpleados = resp.result.rows.length;
    });

  }

  materiaRep = () => {
  this.CS.materiaReprobada().subscribe( resp => {
    this.materiaReprobada = resp.result.rows;
    console.log(this.materiaReprobada);
  });
  }

  mejorPromedio = () => {
  this.CS.mejorPromedio().subscribe(resp => {
    this.bestAVG = resp.result.rows;
    console.log(this.bestAVG);

  });
  }
}
