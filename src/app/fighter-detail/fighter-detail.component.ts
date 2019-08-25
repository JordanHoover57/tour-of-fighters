import { Component, OnInit, Input } from '@angular/core';
import { Fighter } from '../fighter'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {FighterService } from '.././fighter.service'

@Component({
  selector: 'app-fighter-detail',
  templateUrl: './fighter-detail.component.html',
  styleUrls: ['./fighter-detail.component.css']
})
export class FighterDetailComponent implements OnInit {

@Input() fighter: Fighter;

  constructor(
    private route : ActivatedRoute,
    private fighterService : FighterService,
    private location : Location
  ) { }

  ngOnInit() {
    this.getFighter();
  }

  getFighter() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.fighterService.getFighter(id)
      .subscribe(fighter => this.fighter = fighter);
  }

  goBack() : void {
    this.location.back();
  }

}
