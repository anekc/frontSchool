import { Component, OnInit, Input } from '@angular/core';


import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent implements OnInit {

  @Input() title: string = 'Mercawise';

 @Input() public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
 @Input() public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [{backgroundColor: ['#6857E6', '#009FEE', '#F02059']}];

  constructor() { }

  ngOnInit(): void {
  }

}
