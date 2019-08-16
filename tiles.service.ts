import { Injectable } from '@angular/core';
import { ITile } from '../interfaces/itile';

@Injectable({
  providedIn: 'root'
})
export class TilesService {
  tiles:Array<ITile>=[{
 
    image:'tile.jpg',
    name:'karjari',
    model:'2',
    price:1233,
    rating:5,
    status:1,
    Id:1
  },{
   
    image:'tile4.jpg',
    name:'sachin',
    model:'2',
    price:33,
    rating:2,
    status:1,
    Id:1
  },{
   
    image:'tile2.jpg',
    name:'kohli',
    model:'2',
    price:55,
    rating:4,
    status:1,
    Id:1
  },{
   
    image:'tile3.jpg',
    name:'dhoni ',
    model:'2',
    price:77,
    rating:3,
    status:1,
    Id:1
  }]
  
  constructor() { }
  getTiles():Array<ITile>{
    return this.tiles;
  }
  
}
