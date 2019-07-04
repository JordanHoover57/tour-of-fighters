import { Component, OnInit } from '@angular/core';
import { Fighter } from '../fighter';

@Component({
  selector: 'app-fighters',
  templateUrl: './fighters.component.html',
  styleUrls: ['./fighters.component.css']
})

export class FightersComponent implements OnInit {

fighter : Fighter = {
  id : 1,
  name : 'Jon Jones',
  style : 'All - Around',
  wins : 21,
  loses : 0
};

  constructor() { }

  ngOnInit() {
  }

}
