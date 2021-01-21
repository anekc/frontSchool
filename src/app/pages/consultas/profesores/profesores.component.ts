import { Component, OnInit } from '@angular/core';
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
  console.log(this.profesores);
}
);
}

}
