import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';

@Component({
  selector: 'app-on-push-component',
  template: `
    <button (click)='addTwoNumbers()'>add two numbers</button>
    <button style="margin-left: 20px;" (click)='onClick()'>click</button>
    <p></p>
    <div>data: {{nums.toString()}}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushComponent {
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

  onClick(): void {
    // 触发当前组件的变更检测
  }
}


