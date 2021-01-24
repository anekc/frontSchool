import { Component, OnInit } from '@angular/core';
import { GruposService } from 'src/app/services/grupos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styles: [
  ]
})
export class GruposComponent implements OnInit {

 public  grupos = [];
 public totalGrupos = 0;

  constructor(private GS: GruposService) { }

  ngOnInit(): void {
    this.cargarGrupo();
  }

  cargarGrupo(): void {
    this.GS.cargarGrupo().subscribe((resp) => {
      console.log(resp);
      console.log(resp.result.rows);

      this.grupos = resp.result.rows;
      this.totalGrupos = this.grupos.length;
    });
  }

  eliminarGrupo = (grupos) => {
    Swal.fire({
      title: 'Borrar Grupo?',
    text:  `Está seguro de borrar a ${grupos.GRUPO}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar grupo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.GS.eliminarGrupo(grupos).
        subscribe(resp => {
          this.cargarGrupo();
          Swal.fire('Grupo Borrado',
         `${grupos.GRUPO} borrado correctamente`,
          'success');

        });

    }

  });
}

editGrupo = ({ID_GRUPO, GRUPO, NOMBRE_CARRERA, NUMERO_SEMESTRE}) => {
this.GS.actualizarGrupo({ID_GRUPO, GRUPO, NOMBRE_CARRERA, NUMERO_SEMESTRE}).subscribe(
  resp => {
    Swal.fire('Actualizado', `${GRUPO}` , 'success');
  }
);
}

}
