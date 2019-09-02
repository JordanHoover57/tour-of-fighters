import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap }  from 'rxjs/operators';

import { Fighter } from '../fighter';
import { FighterService } from '../fighter.service';

@Component({
  selector: 'app-fighter-search',
  templateUrl: './fighter-search.component.html',
  styleUrls: ['./fighter-search.component.css']
})
export class FighterSearchComponent implements OnInit {

fighters$: Observable<Fighter[]>;
private searchTerms = new Subject<string>();

  constructor(private fighterService : FighterService) { }

search(term : string): void {
  this.searchTerms.next(term);
}

  ngOnInit() : void {
    this.fighters$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term : string) => this.fighterService.searchFighters(term)),
    );
  }

}
