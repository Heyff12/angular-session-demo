import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';

@Component({
  selector: 'app-list-component',
  template: `
    <button (click)='addTwoNumbers()'>add two numbers</button>
    <div>nums:</div>
    <div *ngFor='let num of nums'>{{num}}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() nums: number[];

  add(): void {
    const count = this.nums.length;
    if (count) {
      this.nums.push(count + 1);
    } else {
      this.nums.push(1);
    }
  }

  addTwoNumbers(): void {
    this.add();

    // setTimeout 不会触发变更检测
    setTimeout(() => {
      this.add();
    });
  }
}


