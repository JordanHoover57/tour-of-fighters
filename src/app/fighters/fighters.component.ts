import { Component, OnInit } from '@angular/core';
import { Fighter } from '../fighter';
import { FIGHTERS } from '../mock-fighters'

@Component({
  selector: 'app-fighters',
  templateUrl: './fighters.component.html',
  styleUrls: ['./fighters.component.css']
})

export class FightersComponent implements OnInit {

  fighterArray = FIGHTERS;
  
  selectedFighter : Fighter;



  constructor() { }

  ngOnInit() {
  }

  onSelect(fighter : Fighter){
    this.selectedFighter = fighter;
  }

}
