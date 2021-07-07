import { Component } from '@angular/core';

@Component({
  selector: 'app-data-component',
  template: `
    <div>=========== DataComponent ===========</div>
    <br />
    <button (click)='add()'>add one number</button>
    <button style="margin-left: 20px;" (click)='onClick()'>click</button>
    <p></p>
    <div>data: {{nums.toString()}}</div>
    <br />
    <div>=========== OnPushComponent ===========</div>
    <br />
    <app-on-push-component [nums]='nums'></app-on-push-component>
  `,
})
export class DataComponent {
  nums: number[] = [];

  add(): void {
    const count = this.nums.length;
    if (count) {
      this.nums = [...this.nums, count + 1];
    } else {
      this.nums = [...this.nums, 1];
    }
  }

  onClick(): void {
    // 触发当前组件的变更检测
  }
}


