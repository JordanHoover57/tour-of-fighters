import { Injectable } from '@angular/core';
import { Fighter } from './fighter';
import { FIGHTERS } from './mock-fighters';


@Injectable({
  providedIn: 'root'
})
export class FighterService {

  constructor() { }

getFighters() : Fighter[] {
  return FIGHTERS;
}

}
