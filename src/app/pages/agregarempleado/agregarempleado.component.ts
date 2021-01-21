import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmpleadosService } from '../../services/empleados.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregarempleado',
  templateUrl: './agregarempleado.component.html',
  styles: [
  ]
})
export class AgregarempleadoComponent implements OnInit {
public formsubmitted = false;
public empleadoForm = this.fb.group({
  name: ['', Validators.required],
    lastname: ['', Validators.required],
    surname: ['', Validators.required],
    age: [, Validators.required],
    dep: ['', Validators.required],
    id_dir: [, Validators.required],
    id_sex: [, Validators.required],
    id_turno: [, Validators.required]
});
  constructor(private fb: FormBuilder,
              private ES: EmpleadosService) { }

  ngOnInit(): void {
  }

  agregarEmpleado = () => {
    this.formsubmitted = true;
    console.log(this.empleadoForm.value);

    if (this.empleadoForm.invalid){
    return;
  }
  // realizar el posteo
    this.ES.crearEmpleado(this.empleadoForm.value).
    subscribe(resp => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El Empleado ha sido agregado correctamente',
        showConfirmButton: false,
        timer: 2500
      });
      console.log('Empleado Agregado');
      console.log(resp);
    }, (err) => {
      // si sucede un error
      Swal.fire('error', err.error.msg, 'error');
    } );
  }
  campoNoValido = (campo: string): boolean => {
    if (this.empleadoForm.get(campo).invalid && this.formsubmitted){
      return true;
    } else {
      return false;
    }
  }

}
