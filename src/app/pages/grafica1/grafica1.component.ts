import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  labels1: string[] = ['Software', 'Hardware', 'Diseño'];
  data1 = [[200, 360, 100],
];

labels2: string[] = ['Hardware', 'Diseño', 'Software'];
data2 = [[300, 370, 200],
];

labels3: string[] = ['Disñeo', 'Hardware', 'Software'];
data3 = [[400, 380, 400],
];

labels4: string[] = ['Software', 'Hardware', 'Diseño'];
data4 = [[200, 360, 100],
];


  constructor() { }

  ngOnInit(): void {
  }

}
