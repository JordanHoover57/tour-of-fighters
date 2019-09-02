import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Fighter } from './fighter'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService{

  createDb(){
    const fighters = [
      {id : 11, name : 'Jon Jones', style : 'All - Around', wins : 20, loses : 0},
      {id : 12, name : 'Daniel Cormier', style : 'All - Around', wins : 22, loses : 2},
      {id : 13, name : 'Tony Fergueson', style : 'Wild', wins : 24, loses : 3},
      {id : 14, name : 'Max Holloway', style : 'Striker', wins : 18, loses : 3},
      {id : 15, name : 'Henry Cejudo', style : 'Wrestler', wins : 10, loses : 1},
      {id : 16, name : 'Khabib Nurmagomedov', style : 'Grappler', wins : 27, loses : 0},
      {id : 17, name : 'Kamaru Usman', style : 'All - Around', wins : 13, loses : 2},
      {id : 18, name : 'Robert Whitiker', style : 'Boxer', wins : 15, loses : 5},
      {id : 19, name : 'Amanda Nunez', style : 'Stiker', wins : 9, loses : 2},
      {id : 20, name : 'Vitor Belfort', style : 'TRT', wins : 1000, loses : 0}
    ];
    return {fighters};
  }
  constructor() { }

  genId(fighters : Fighter[]): number {
    return fighters.length > 0 ? Math.max(...fighters.map(fighter => fighter.id)) + 1 : 11;
  }
}
