import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'bb-configurations',
  templateUrl: './configurations-container.component.html',
  styleUrls: ['./configurations-container.component.scss']
})
export class ConfigurationsContainerComponent implements OnInit {
  constructor() {}
  navColor = {
    hex: '#333',
    rgb: {
      r: 51,
      g: 51,
      b: 51,
      a: 1
    },
    hsl: {
      h: 0,
      s: 0,
      l: 0.2,
      a: 1
    }
  };

  btnColor = {
    hex: '#333',
    rgb: {
      r: 51,
      g: 51,
      b: 51,
      a: 1
    },
    hsl: {
      h: 0,
      s: 0,
      l: 0.2,
      a: 1
    }
  };

  handleChange($event: ColorEvent, type) {
    const color = {
      hex: $event.color.hex,
      rgb: $event.color.rgb,
      hsl: $event.color.hsl
    };
    switch (type) {
      case 'button':
        this.btnColor = color;
        break;
      case 'navbar':
        this.navColor = color;
        break;
      default:
        break;
    }

    console.log(this.btnColor, this.navColor);
  }

  ngOnInit() {}
}
