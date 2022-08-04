import { Component, OnInit, Input } from '@angular/core';
import { CatListService } from '../../services/catList/cat-list.service';
import { Cat, Breeds } from 'src/app/Interfaces/Cat';


@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.sass']
})
export class CatListComponent implements OnInit {

  constructor(private _CatListService: CatListService) { }

  catList:Breeds[] = []
  idList:string[] = []
  
  countryUrl(flag:string):any{
    return `https://countryflagsapi.com/png/${flag}`
  }

  teste(a:any){
    alert(a)

  }
  
  ngOnInit(): void {

    this._CatListService.getDataBreed().subscribe(data=>{
      this.catList = data
    }

    )


  }

}
