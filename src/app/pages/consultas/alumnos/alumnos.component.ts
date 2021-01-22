import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from 'src/app/models/alumno.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styles: [],
})
export class AlumnosComponent implements OnInit {
  public totalUsuarios = 0;
  public alumnos: Alumno[];
  constructor(private AS: AlumnoService) {
    this.alumnos = new Array<Alumno>();
    console.log(this.alumnos);
  }

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos(): void {
    this.AS.cargarAlumnos().subscribe((resp) => {
      console.log(resp);
      console.log(resp.result.rows);

      this.alumnos = resp.result.rows;
      this.totalUsuarios = this.alumnos.length;
      console.log(this.totalUsuarios);
    });
  }

  eliminarAlumno = (alumnos) => {
    Swal.fire({
      title: 'Borrar Alumno?',
    text:  `Está seguro de borrar a ${alumnos.NOMBRE}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar alumno'
    }).then((result) => {
      if (result.isConfirmed) {
        this.AS.eliminarAlumno(alumnos).
        subscribe(resp => {
          this.cargarAlumnos();
          Swal.fire('Alumno Borrado',
         `${alumnos.NOMBRE} borrado correctamente`,
          'success');

        });

    }

  });
}

editAlumno = (alumnos) => {
this.AS.actualizarhospital(alumnos).subscribe(
  resp => {
    Swal.fire('Actualizado', alumnos.Nombre, 'success');
  }
);
}

}
