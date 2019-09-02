import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FighterSearchComponent } from './fighter-search.component';

describe('FighterSearchComponent', () => {
  let component: FighterSearchComponent;
  let fixture: ComponentFixture<FighterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FighterSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FighterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
