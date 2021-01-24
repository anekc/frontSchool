import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProfesoresService } from '../../../services/profesores.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styles: [
  ]
})
export class ProfesoresComponent implements OnInit {
public totalProfesores = 0;
public profesores = [];
  constructor(private PS: ProfesoresService) {
    this.profesores = new Array<any>();
   }

  ngOnInit(): void {
    this.cargarprofe();
  }

cargarprofe(): void {
this.PS.cargarProfesor().subscribe( resp => {
  console.log(resp);
  this.profesores = resp.result.rows;
  this.totalProfesores = this.profesores.length;
  console.log(this.profesores);
}
);
}



eliminarProfesor = (profesores) => {
  Swal.fire({
    title: 'Borrar Alumno?',
  text:  `Está seguro de borrar a ${profesores.NOMBRE}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, borrar profesor'
  }).then((result) => {
    if (result.isConfirmed) {
      this.PS.eliminarProfesor(profesores).
      subscribe(resp => {
        this.cargarprofe();
        Swal.fire('profesor Borrado',
       `${profesores.NOMBRE} borrado correctamente`,
        'success');

      });

  }

});
}

editProfesor = ({ID_PROFESOR, NOMBRE, APELLIDO_PAT, APELLIDO_MAT, EDAD, CORREO_ELECTRONICO}) => {
  this.PS.actualizarProfesor({ID_PROFESOR, NOMBRE, APELLIDO_PAT, APELLIDO_MAT, EDAD, CORREO_ELECTRONICO}).subscribe(
    resp => {
      Swal.fire('Actualizado', `${NOMBRE} ${APELLIDO_PAT}`, 'success');
    }
  );
  }

}
