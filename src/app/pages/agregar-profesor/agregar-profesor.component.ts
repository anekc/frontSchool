import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ProfesoresService } from 'src/app/services/profesores.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar-profesor',
  templateUrl: './agregar-profesor.component.html',
  styleUrls: ['./agregar-profesor.component.css']
})
export class AgregarProfesorComponent implements OnInit {
  public formsubmitted = false;
  public addProfesorForm = this.fb.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    surname: ['', Validators.required],
    age: [, Validators.required],
    id_dir: [, Validators.required],
    id_sex: [, Validators.required],
  });
  constructor(private fb: FormBuilder,
              private PS: ProfesoresService) { }

  ngOnInit(): void {
  }
  crearProfesor = () => {
    this.formsubmitted = true;
    console.log(this.addProfesorForm.value);

    if (this.addProfesorForm.invalid){
    return;
  }
  // realizar el posteo
    this.PS.crearProfesor(this.addProfesorForm.value).
    subscribe(resp => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El Profesor ha sido agregado correctamente',
        showConfirmButton: false,
        timer: 2500
      });
      console.log('Profesor agregado');
      console.log(resp);
    }, (err) => {
      // si sucede un error
      Swal.fire('error', err.error.msg, 'error');
    } );
  }
  campoNoValido = (campo: string): boolean => {
    if (this.addProfesorForm.get(campo).invalid && this.formsubmitted){
      return true;
    } else {
      return false;
    }
  }
}
