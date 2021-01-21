import { Component, OnInit } from '@angular/core';
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

}
