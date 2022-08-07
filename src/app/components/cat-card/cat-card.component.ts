import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CatInfoService } from 'src/app/services/catInfo/cat-info.service';
import { catInfo, catImage } from 'src/app/Interfaces/Cat';


@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {

  id:string | null = ''

  catInfo:catInfo 

  catImage:catImage[]

  imageId:string = ''

  constructor(private route: ActivatedRoute, private _CatInfoService:CatInfoService) { }

  countryUrl(flag:string):any{
    return `https://countryflagsapi.com/png/${flag}`
  }


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

  })

    this._CatInfoService.getCatImage(this.id).subscribe(image =>{
      this.catImage = image
    })


  }
}
