import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Historial } from '../../../models/historial.model';

@Component({
  selector: 'app-historial-alumno',
  templateUrl: './historial-alumno.component.html',
  styles: [],
})
export class HistorialAlumnoComponent implements OnInit {
  public formsubmitted = false;
  public historial: Historial[];
  public historialAlumnoform = this.fb.group({
    nombre: ['', Validators.required],
  });
  constructor(private fb: FormBuilder,
              private AS: AlumnoService) {
                this.historial = new Array<Historial>();
              }

  ngOnInit(): void {
    this.buscarAlumno();
  }

  buscarAlumno(): void {
    this.formsubmitted = true;
    console.log(this.historialAlumnoform.value);

    if (this.historialAlumnoform.invalid) {
      return;
    }
    // retornar el historia
    this.AS.historialAlumno(this.historialAlumnoform.value).subscribe(
      (resp) => {
        console.log(resp);
        this.historial = resp.result.rows;
      });
  }
}
