import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-week-carousel',
  templateUrl: './week-carousel.component.html',
  styleUrls: ['./week-carousel.component.scss']
})
export class WeekCarouselComponent implements OnInit {
  currentIndex = 0;
  infinite = true;
  weeks = Array.from({ length: 5 }, (_, k) => k + 1);

  constructor() {}

  click(i: number) {
    this.currentIndex = i - 1;
  }

  ngOnInit() {}
}
