import { Component } from '@angular/core';
import { wait } from '../../utils/sleep';

@Component({
  selector: 'app-count-component',
  template: `
    <span>{{count}}</span>
    <br />
    <button (click)="update()">Add</button>
  `,
})
export class CountComponent {
  count = 0;

  update(): void {
    this.count++;
  }

  // update(): void {
  //   this.count++;
  //
  //   // 等待 2s
  //   wait(2000);
  //
  //   console.log('event handle end');
  //
  //   // 一次点击事件完成之后，才会触发变更检查
  // }

  // update(): void {
  //   this.count++;
  //
  //   // setTimeout 将触发变更检测
  //   setTimeout(() => {
  //     console.log('setTimeout');
  //     this.count++;
  //   }, 2000);
  // }
}


