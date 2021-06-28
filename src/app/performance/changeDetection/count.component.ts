import { Component } from '@angular/core';

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
  //   // 在以下代码执行完毕之前DOM不会发生更新
  //   for (let i = 0; i < 100000; i++) {
  //     console.log(i);
  //   }
  // }

  // update(): void {
  //   this.count++;
  //
  //   // setTimeout 将触发变更检测
  //   setTimeout(() => {
  //     this.count++;
  //   }, 2000);
  // }
}


