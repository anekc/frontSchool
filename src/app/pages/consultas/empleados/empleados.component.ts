import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import Swal from 'sweetalert2';
import { MateriasService } from '../../../services/materias.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: [
  ]
})
export class EmpleadosComponent implements OnInit {
public empleados = [];
  constructor(private ES: MateriasService,
              private es: EmpleadosService) { }

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados = () => {
    this.ES.getEmpleados().subscribe(resp => {
      this.empleados = resp.result.rows;
    });
  }

  eliminarEmpleado = (empleados) => {
    Swal.fire({
      title: 'Borrar Empleado ?',
    text:  `Está seguro de borrar a ${empleados.NOMBRE}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar empleado'
    }).then((result) => {
      if (result.isConfirmed) {
        this.es.eliminarEmpleado(empleados).
        subscribe(resp => {
          this.cargarEmpleados();
          Swal.fire('Empleado Borrado',
         `${empleados.NOMBRE} borrado correctamente`,
          'success');

        });

    }

  });
}

editEmpleado = ({ID_EMPLEADO , NOMBRE, APELLIDO_PAT, APELLIDO_MAT, EDAD, CORREO_ELECTRONICO, DEPARTAMENTO}) => {
this.es.actualizarEmpleado({ID_EMPLEADO , NOMBRE, APELLIDO_PAT, APELLIDO_MAT, EDAD, CORREO_ELECTRONICO, DEPARTAMENTO}).subscribe(
  resp => {
    Swal.fire('Actualizado', `${NOMBRE} ${APELLIDO_PAT}` , 'success');
  }
);
}
}
