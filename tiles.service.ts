import { Injectable } from '@angular/core';
import { ITile } from '../interfaces/itile';

@Injectable({
  providedIn: 'root'
})
export class TilesService {
  tiles:Array<ITile>=[{
    image:'1.jpg',
      name:'mahesh',
      model:'developer',
      price:100,
      rating:3,
      status:1
  },
  {
    image:'2.jpg',
      name:'dhoni',
      model:'cricketer',
      price:200,
      rating:1,
      status:0
  },
  {
    image:'3.png',
      name:'kohli',
      model:'batter',
      price:500,
      rating:4,
      status:1
  },
  {
    image:'4.png',
      name:'virat',
      model:'bowl',
      price:5500,
      rating:4,
      status:0
  },
  {
    image:'5.jpg',
      name:'raj',
      model:'batter',
      price:5000,
      rating:4,
      status:1
  }]
  
  constructor() { }
  getTiles():Array<ITile>{
    return this.tiles;
  }
}
