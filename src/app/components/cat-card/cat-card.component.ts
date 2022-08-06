import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CatInfoService } from 'src/app/services/catInfo/cat-info.service';
import { catInfo, catImage } from 'src/app/Interfaces/Cat';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.sass']
})
export class CatCardComponent implements OnInit {

  id:string | null = ''
  catInfo:catInfo = {
    id: '',
    name: '',
    temperament: '',
    origin: '',
    country_code: '',
    description: '',
    adaptability: 0,
    affection_level: 0,
    child_friendly: 0,
    cat_friendly: 0,
    dog_friendly: 0,
    energy_level: 0,
    health_issues: 0,
    intelligence: 0,
    social_needs: 0,
    stranger_friendly: 0
  }

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
        cat_friendly: data.cat_friendly,
        dog_friendly: data.dog_friendly,
        energy_level: data.energy_level,
        health_issues: data.health_issues,
        intelligence: data.intelligence,
        social_needs: data.social_needs,
        stranger_friendly: data.stranger_friendly
    }

    console.log(this.catInfo)
  })
    

    this._CatInfoService.getCatImage(this.id).subscribe(image =>{
      this.catImage = image
    })


  }
}
