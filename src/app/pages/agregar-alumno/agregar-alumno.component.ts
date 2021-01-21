import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlumnoService } from '../../services/alumno.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css'],
})
export class AgregarAlumnoComponent  {
  public formsubmitted = false;
  public addalumnoform = this.fb.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    surname: ['', Validators.required],
    age: [, Validators.required],
    id_dir: [, Validators.required],
    id_sex: [, Validators.required],
  });
  constructor(private fb: FormBuilder,
              private AS: AlumnoService) {}



  crearAlumno = () => {
    this.formsubmitted = true;
    console.log(this.addalumnoform.value);

    if (this.addalumnoform.invalid){
    return;
  }
  // realizar el posteo
    this.AS.crearAlumno(this.addalumnoform.value).
    subscribe(resp => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El alumno ha sido agregado correctamente',
        showConfirmButton: false,
        timer: 2500
      });
      console.log('alumno agregado');
      console.log(resp);
    }, (err) => {
      // si sucede un error
      Swal.fire('error', err.error.msg, 'error');
    } );
  }
  campoNoValido = (campo: string): boolean => {
    if (this.addalumnoform.get(campo).invalid && this.formsubmitted){
      return true;
    } else {
      return false;
    }
  }
}
