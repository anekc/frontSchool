import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MateriasService } from '../../../services/materias.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styles: [
  ]
})


export class MateriasComponent implements OnInit {
public materias = [];

  constructor(private MS: MateriasService) {
    this.materias = new Array<any>();
   }

  ngOnInit(): void {
    this.cargarMaterias();
  }

  cargarMaterias = () => {
    this.MS.getMaterias().subscribe(resp => {
      this.materias = resp.result.rows;
      console.log(this.materias);
    });

  }
  eliminarMateria = (materias) => {
    Swal.fire({
      title: 'Borrar Alumno?',
    text:  `Está seguro de borrar a ${materias.NOMBRE_MATERIA}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar materia'
    }).then((result) => {
      if (result.isConfirmed) {
        this.MS.eliminarMateria(materias).
        subscribe(resp => {
          this.cargarMaterias();
          Swal.fire('Materia Borrada',
         `${materias.NOMBRE_MATERIA} borrada correctamente`,
          'success');

        });

    }

  });
}

editMateria = ({ID_MATERIA, NOMBRE_MATERIA}) => {
this.MS.actualizarMateria({ID_MATERIA, NOMBRE_MATERIA}).subscribe(
  resp => {
    Swal.fire('Actualizado', `${NOMBRE_MATERIA}` , 'success');
  }
);
}
}
