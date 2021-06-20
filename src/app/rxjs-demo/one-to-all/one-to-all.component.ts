import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-to-all',
  templateUrl: './one-to-all.component.html',
  styleUrls: ['./one-to-all.component.scss']
})
export class OneToAllComponent implements OnInit {
  wolfMan = [{
    id: 1,
    ex: 10
  }, {
    id: 2,
    ex: 12,
    equipment: '豺狼人的牙齿'
  }, {
    id: 3,
    ex: 10,
    equipment: '破损的豺狼人披风'
  }, {
    id: 4,
    ex: 13
  }, {
    id: 5,
    ex: 11,
    equipment: '风干的香蕉'
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
