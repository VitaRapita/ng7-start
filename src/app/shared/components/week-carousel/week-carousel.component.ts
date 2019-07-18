import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bb-week-carousel',
  templateUrl: './week-carousel.component.html',
  styleUrls: ['./week-carousel.component.scss']
})
export class WeekCarouselComponent implements OnInit {
  currentIndex = 0;
  infinite = true;
  weeks = Array.from({ length: 52 }, (_, k) => k + 1);
  @Input()
  currentWeek!: number;
  @Output()
  chosenWeek = new EventEmitter();

  constructor() {}

  click(i: number) {
    this.currentIndex = i - 1;
    this.changeСhosenWeek();
  }

  changeСhosenWeek() {
    this.currentWeek = this.currentIndex + 1;
    this.chosenWeek.emit(this.currentWeek);
  }

  ngOnInit() {
    this.currentIndex = this.currentWeek - 1;
  }
}
