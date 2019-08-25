import { Injectable } from '@angular/core';
import { Fighter } from './fighter';
import { FIGHTERS } from './mock-fighters';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Injectable({
  providedIn: 'root'
})
export class FighterService {

  constructor(private messageService : MessageService) { }

getFighters(): Observable<Fighter[]> {
  //TODO: send the messate _after_ fetching the heroes
  this.messageService.add('FighterService: fetched fighters');
  return of(FIGHTERS);
}

getFighter(id : number) : Observable<Fighter>{
  this.messageService.add(`HeroService: fetched hero id=${id}`);
  return of(FIGHTERS.find(figher => figher.id === id));
}

}
