import { Component, OnInit } from '@angular/core';
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
  
  ngOnInit(): void {

    this._CatListService.getData().subscribe(data=>{
      this.catList = data
      console.log(this.catList)
    }

    )
  }

}
