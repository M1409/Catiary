import { Component, OnInit, ViewChild, Input } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
};



@Component({
  selector: 'app-radarchart',
  templateUrl: './radarchart.component.html',
  styleUrls: ['./radarchart.component.sass']
})
export class RadarchartComponent implements OnInit {

  @Input() adaptability:number
  @Input() affection_level:number
  @Input() child_friendly:number
  @Input() social_needs:number
  @Input() stranger_friendly:number
  @Input() intelligence:number

  chartData:number[]

  @ViewChild("chart") chart: ChartComponent

  public chartOptions: Partial<ChartOptions> | any;

  constructor() {}

  ngOnInit(): void {

    this.chartData= [this.adaptability,this.affection_level,this.child_friendly,this.social_needs,this.stranger_friendly,this.intelligence]
    
    this.chartOptions = {
      series: [
        {
          data:this.chartData
        }
      ],
      chart: {
        height: 350,
        type: "radar",
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: ["Adaptação","Nível de Afeição", "Proximidade com Crianças", "Necessidades Sociais", "Proximidade com Estranhos", "Inteligência"]
      },
    };
  }

}
