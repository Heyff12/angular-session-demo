import { Component, OnInit } from '@angular/core';
import { AllToOneService } from './all-to-one.service';
import { map } from 'rxjs/internal/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-to-one',
  templateUrl: './all-to-one.component.html',
  styleUrls: ['./all-to-one.component.scss']
})
export class AllToOneComponent implements OnInit {
  friends = [
    {
      name: '迅捷之潜行者',
      union: '风暴熊猫',
      character: '潜行者',
      fav: false,
    },
    {
      name: '迅捷之弓箭手',
      union: '风暴熊猫',
      character: '猎人',
      fav: false,
    },
    {
      name: '迅捷之巨魔',
      union: '镶金玫瑰',
      character: '猎人',
      fav: false,
    },
    {
      name: '蛮力之裤',
      union: '镶金玫瑰',
      character: '战士',
      fav: true,
    },
    {
      name: '恐惧之镰',
      union: '风暴熊猫',
      character: '死亡骑士',
      fav: false,
    },
    {
      name: '战斗之软泥怪',
      union: '镶金玫瑰',
      character: '牧师',
      fav: true,
    },
    {
      name: '致命之猫',
      union: '风暴熊猫',
      character: '德鲁伊',
      fav: false,
    },
    {
      name: '史诗之巨魔',
      union: '镶金玫瑰',
      character: '猎人',
      fav: true,
    },
    {
      name: '魔法之抱歉',
      union: '雷霆崖售房部',
      character: '法师',
      fav: false,
    },
    {
      name: '暴怒之陆行鸟',
      union: '雷霆崖售房部',
      character: '猎人',
      fav: true,
    },
    {
      name: '野蛮之豺狼人',
      union: '世界之末',
      character: '战士',
      fav: true,
    },
  ];
  characters = ['', '潜行者', '牧师', '猎人', '战士', '法师', '德鲁伊', '死亡骑士'];
  unions = ['', '风暴熊猫', '镶金玫瑰', '雷霆崖售房部', '世界之末'];
  filterText = '';

  filtered$: Observable<Array<any>>;

  constructor(private service: AllToOneService) {
  }

  ngOnInit(): void {
    this.filtered$ = this.service.filterChange().pipe(
      map(filter => {
        return this.friends.filter(f => !filter.name || f.name.includes(filter.name))
          .filter(f => !filter.character || f.character === filter.character)
          .filter(f => !filter.union || f.union === filter.union)
          .filter(f => !filter.fav || f.fav);
      })
    );
  }

  nameChange(name): void {
    this.service.name$.next(name);
  }

  characterChange(character: string): void {
    console.log(character);
    this.service.character$.next(character);
  }

  unionChange(union: string): void {
    this.service.union$.next(union);
  }

  favChange(): void {
    this.service.fav$.next(true);
  }

  favCancel(): void {
    this.service.fav$.next(false);
  }
}
