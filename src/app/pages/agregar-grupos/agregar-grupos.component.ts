import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { GruposService } from '../../services/grupos.service';

@Component({
  selector: 'app-agregar-grupos',
  templateUrl: './agregar-grupos.component.html',
  styleUrls: ['./agregar-grupos.component.css']
})
export class AgregarGruposComponent implements OnInit {
  public formsubmitted = false;
  public addGrupoForm = this.fb.group({
    grupo: ['', Validators.required],
    carrera: [0, Validators.required],
    semestre: [0, Validators.required],
    turno: [0, Validators.required]
  });
  constructor(private fb: FormBuilder,
              private GS: GruposService) { }

  ngOnInit(): void {
  }

  crearGrupo = () => {
    this.formsubmitted = true;
    console.log(this.addGrupoForm.value);

    if (this.addGrupoForm.invalid){
    return;
  }
  // realizar el posteo
    this.GS.crearGrupo(this.addGrupoForm.value).
    subscribe(resp => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El grupo ha sido agregado correctamente',
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
  // campoNoValido = (campo: string): boolean => {
  //   if (this.addGrupoForm.get(campo).invalid && this.formsubmitted){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

}
