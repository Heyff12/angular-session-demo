import { Component, OnInit } from '@angular/core';

interface Hero {
  name: string;
  genderCode: 'M' | 'W';
}

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {
  heroes: Hero[];

  ngOnInit(): void {
    this.heroes = [
      {
        name: '钢铁侠',
        genderCode: 'M',
      },
      {
        name: '黑寡妇',
        genderCode: 'W',
      },
      {
        name: '蜘蛛侠',
        genderCode: 'M',
      },
      {
        name: '蜘蛛女侠',
        genderCode: 'W',
      },
    ];
  }

  getGender(value: string): string {
    console.log('getGender:', value);
    if (value === 'M') { return '男'; }
    if (value === 'W') { return  '女'; }
    return '';
  }
}


