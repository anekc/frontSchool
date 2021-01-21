import { Component, OnInit } from '@angular/core';
import { MateriasService } from '../../../services/materias.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: [
  ]
})
export class EmpleadosComponent implements OnInit {
public empleados = [];
  constructor(private ES: MateriasService) { }

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados = () => {
    this.ES.getEmpleados().subscribe(resp => {
      this.empleados = resp.result.rows;
    });
  }
}
