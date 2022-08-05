import { Component, OnInit } from '@angular/core';

import { CatFavoritesService } from 'src/app/services/catFavorites/cat-favorites.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.sass']
})
export class FavListComponent implements OnInit {

  constructor(private _CatFavoritesService: CatFavoritesService) { }

  favoriteList:any[] = []
  favId:number = 0

  generateFavorites():void{
    this._CatFavoritesService.getFavorites().subscribe(favorite =>{
      this.favoriteList = favorite
      console.log(this.favoriteList)
    })
  }

  deleteFavorite(favId:number){
    this.favId = favId
    this._CatFavoritesService.deleteFavorites(favId).subscribe(favorite =>{
      this.generateFavorites()
    })

  }



  ngOnInit(): void {
    this.generateFavorites()
  }

}
