import { Component, OnInit } from '@angular/core';

import {ITile} from '../interfaces/itile';
import { AlertPromise } from 'selenium-webdriver';
import { TilesService } from '../services/tiles.service';
@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  imagepath:string= '/assets/images/';
  filterOptions : Array<string>=['name','model','price'];
  selectedoption:string='price';
  filterText:string='';
  filteredTiles:Array<ITile>=[];
tiles:Array<ITile>=[]
  constructor(private tilesService:TilesService) {
    this.filteredTiles=this.tiles;
   }

  ngOnInit():void {
this.tiles=this.tilesService.getTiles();
this.filteredTiles=this.tiles;
  }

 filter(){
   this.filteredTiles=this.myfunc(this.selectedoption,this.filterText,this.tiles);
   console.log(this.filteredTiles);
 }
myfunc(dropdn, inp, tilees){
let filteredTiles = tilees.filter((tile)=>{
if(dropdn=='price'){
  return tile.price > +inp;
}

})
return filteredTiles;
}
} 