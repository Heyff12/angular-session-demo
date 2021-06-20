import { Component, OnInit } from '@angular/core';
import { GameDemoService } from './game-demo.service';

@Component({
  selector: 'app-game-demo',
  templateUrl: './game-demo.component.html',
  styleUrls: ['./game-demo.component.scss']
})
export class GameDemoComponent implements OnInit {
  isStart: boolean;
  startFight: boolean;
  introText = '';
  startScript = [
    '在宁静的小村庄里，一种怪病正在慢慢吞噬着村民们的生命。',
    '你作为全村唯一能够拔出勇者之剑的青年，去往未知的远方寻找灵药成为了你义不容辞的责任。',
    '灵药很快就被你找到了，可是故事并没有结束。',
    '佛祖现身赋予了你十分艰巨的任务——前往魔王的根据地，打败魔王。'
  ].reverse();
  yuusya;
  maou;
  round;

  constructor(private service: GameDemoService) {
    this.isStart = false;
    this.startFight = false;
  }

  ngOnInit(): void {
    this.service.gameInit();
    this.service.onScriptTextChange().subscribe(s => this.introText += s);
    this.service.yuusya$.subscribe(it => {
      console.log(JSON.stringify(it));
      return this.yuusya = it;
    });
    this.service.maou$.subscribe(it => this.maou = it);
  }

  start(): void {
    this.isStart = true;
    this.nextText();
  }

  nextText(): void {
    this.introText = '';
    this.service.nextScriptText(this.startScript.pop());
  }

  scriptEnd(): boolean {
    return this.startScript.length === 0;
  }

  startBoss(): void {
    this.startFight = true;
    this.service.yuusyaStart();
    this.service.maouStart();
    this.service.round$.subscribe(r => this.round = r);
  }
}

