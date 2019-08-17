import { Component, OnInit, Input } from '@angular/core';
import { Fighter } from '../fighter'

@Component({
  selector: 'app-fighter-detail',
  templateUrl: './fighter-detail.component.html',
  styleUrls: ['./fighter-detail.component.css']
})
export class FighterDetailComponent implements OnInit {

@Input() fighter: Fighter;

  constructor() { }

  ngOnInit() {
  }

}
