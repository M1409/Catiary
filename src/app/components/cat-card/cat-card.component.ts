import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CatInfoService } from 'src/app/services/catInfo/cat-info.service';
import { catInfo, catImage } from 'src/app/Interfaces/Cat';

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
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.sass']
})
export class CatCardComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent

  public chartOptions: Partial<ChartOptions> | any;

  id:string | null = ''

  catInfo:catInfo 

  chartData:number[]
  numero:any = 1

  

  catImage:catImage[] = []	
  
  constructor(private route: ActivatedRoute, private _CatInfoService:CatInfoService) { }

  

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')

    this._CatInfoService.getCatInfo(this.id).subscribe(data=>{
      this.catInfo = {
        id: data.id,
        name: data.name,
        temperament: data.temperament,
        origin: data.origin,
        country_code: data.country_code,
        description: data.description,
        adaptability: data.adaptability,
        affection_level: data.affection_level,
        child_friendly: data.child_friendly,
        health_issues: data.health_issues,
        intelligence: data.intelligence,
        social_needs:data.social_needs,
        stranger_friendly: data.stranger_friendly
    }

    this.chartData= [this.catInfo.adaptability,this.catInfo.affection_level,this.catInfo.child_friendly, this.catInfo.social_needs, this.catInfo.stranger_friendly,this.catInfo.health_issues]

    this.chartOptions = {
      series: [
        {
          // data: [this.catInfo.adaptability,this.catInfo.affection_level,this.catInfo.child_friendly,this.catInfo.cat_friendly,this.catInfo.health_issues,this.catInfo.intelligence]
          data:this.chartData
        }
      ],
      chart: {
        height: 350,
        type: "radar"
      },
      title: {
        text: "Basic Radar Chart"
      },
      xaxis: {
        categories: ["Adaptação","Nível de Afeição", "Proximidade com Crianças", "Necessidades Sociais", "Proximidade com Estranhos", "Inteligência"]
      }
    };
  })

  
    this._CatInfoService.getCatImage(this.id).subscribe(image =>{
      this.catImage = image
    })


  }
}
