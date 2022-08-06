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
  catInfo:catInfo[] = []
  catImage:catImage[] = []	
  
  constructor(private route: ActivatedRoute, private _CatInfoService:CatInfoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')

    this._CatInfoService.getCatInfo(this.id).subscribe(data=>{
      this.catInfo = data
    })

    this._CatInfoService.getCatImage(this.id).subscribe(image =>{
      this.catImage = image
    })


  }
}
