import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-component',
  template: `
    <div>=========== DataComponent ===========</div>
    <button (click)='add()'>add</button>
    <div>nums: {{nums.toString()}}</div>
    <div>=========== ListComponent ===========</div>
    <app-list-component [nums]='nums'></app-list-component>
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
}


