import { Component, OnInit } from '@angular/core';
import { GruposService } from 'src/app/services/grupos.service';

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

}
