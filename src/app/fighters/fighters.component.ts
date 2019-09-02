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

  constructor(private fighterService : FighterService) { }

  ngOnInit() {
    this.getFighters();
  }

  getFighters() : void {
    this.fighterService.getFighters()
      .subscribe((fighter) => this.fighters = fighter);
  }

  add(name : string): void {
    name = name.trim();
    if(!name) {return;}
    this.fighterService.addFighter({name} as Fighter)
    .subscribe(fighter => {
      this.fighters.push(fighter);
    });
  }

  delete(fighter : Fighter) : void {
    this.fighters = this.fighters.filter(f => f !== fighter);
    this.fighterService.deleteFighter(fighter).subscribe();
  }
}
