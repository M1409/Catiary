import { Component, OnInit, Input } from '@angular/core';
import { CatListService } from '../../services/catList/cat-list.service';
import {Breeds, postFavorites} from 'src/app/Interfaces/Cat';



@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.sass']
})
export class CatListComponent implements OnInit {

  constructor(private _CatListService: CatListService) { }

  catList:Breeds[] = []
  idList:string[] = []
  imageId:string = ''

  
  countryUrl(flag:string):any{
    return `https://countryflagsapi.com/png/${flag}`
  }

  getImageId(imageid:string){
    this.imageId = imageid
    var opost:postFavorites = {
      image_id: this.imageId,
      sub_id: 'user123',
    }

    this._CatListService.postFavorite(opost).subscribe()
    
  }
  
  ngOnInit(): void {

    this._CatListService.getDataBreed().subscribe(data=>{
      this.catList = data
    }

    )
  }

}
