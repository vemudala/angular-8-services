import { Component, OnInit } from '@angular/core';
import {ITile} from '../interfaces/itile';
import { TilesService } from '../services/tiles.service';  //created new service// imported service

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  searcheditems:Array<ITile>=[]
  imagepath:string='./assets/images/'
  search:Array<string>=['model','price','name'];
  selected:string="price";
  selectedinput:string="";
tiles:Array<ITile>=[];
  constructor(private tilesService:TilesService) { 
    this.searcheditems=this.tiles;
   }

  ngOnInit() {
    this.tiles= this.tilesService.getTiles();//call service method
    this.searcheditems=this.tiles;
  }
  search_filter(){
    // alert(this.selected);
    // alert(this.selectedinput);
    this.searcheditems= this.searchh(this.selected,this.selectedinput,this.tiles);
console.log(this.searcheditems);
  }
  searchh(selected,selectedinput,tilees){
    let searcheditems= tilees.filter((tilee)=>{
      if(this.selected=='price'){
        return tilee.price>+selectedinput
      }
    })
    return searcheditems;
  }
}
