import { Component, OnInit } from '@angular/core';
import { Fighter } from '../fighter';
import { FighterService } from '../fighter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fighters',
  templateUrl: './fighters.component.html',
  styleUrls: ['./fighters.component.css']
})

export class FightersComponent implements OnInit {

  fighters : Fighter[];
  
  selectedFighter : Fighter;

  constructor(private fighterService : FighterService) { }

  ngOnInit() {
    this.getFighters();
  }

  getFighters() : void {
    this.fighterService.getFighters()
      .subscribe((fighter) => this.fighters = fighter);
  }

  onSelect(fighter : Fighter){
    this.selectedFighter = fighter;
  }

}
