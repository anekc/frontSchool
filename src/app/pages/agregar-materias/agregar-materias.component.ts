import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MateriasService } from 'src/app/services/materias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-materias',
  templateUrl: './agregar-materias.component.html',
  styleUrls: ['./agregar-materias.component.css']
})
export class AgregarMateriasComponent implements OnInit {
  public formsubmitted = false;
  public addMateriaForm = this.fb.group({
    id_cal: [0, Validators.required],
    nombre_materia: ['', Validators.required]
  });
  constructor(private fb: FormBuilder,
              private MT: MateriasService) { }

  ngOnInit(): void {
  }

  crearMateria = () => {
    this.formsubmitted = true;
    console.log(this.addMateriaForm.value);

    if (this.addMateriaForm.invalid){
    return;
  }
  // realizar el posteo
    this.MT.crearMateria(this.addMateriaForm.value).
    subscribe(resp => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'La materia ha sido agregada correctamente',
        showConfirmButton: false,
        timer: 2500
      });
      console.log('materia agregada');
      console.log(resp);
    }, (err) => {
      // si sucede un error
      Swal.fire('error', err.error.msg, 'error');
    } );
  }
  campoNoValido = (campo: string): boolean => {
    if (this.addMateriaForm.get(campo).invalid && this.formsubmitted){
      return true;
    } else {
      return false;
    }
  }

}
