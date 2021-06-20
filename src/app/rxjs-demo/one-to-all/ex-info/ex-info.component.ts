import { Component, OnInit } from '@angular/core';
import { OneToAllService } from '../one-to-all.service';

@Component({
  selector: 'app-ex-info',
  templateUrl: './ex-info.component.html',
  styleUrls: ['./ex-info.component.scss']
})
export class ExInfoComponent implements OnInit {
  infos: Array<string>;

  constructor(private service: OneToAllService) {
  }

  ngOnInit(): void {
    this.infos = [];
    this.service.onKill().subscribe(wolfMan => {
      this.infos.push(`击杀豺狼人${ wolfMan.id }, 获得经验值${ wolfMan.ex }exp`);
      if (wolfMan.equipment) {
        this.infos.push(`恭喜您获得装备 【${ wolfMan.equipment }】`);
      }
    });
  }

}
