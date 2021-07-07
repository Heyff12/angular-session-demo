import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone-component',
  template: `<button (click)='onClick()'>Run logZone</button>`
})
export class ZoneComponent implements OnInit {
  logZone: Zone;

  ngOnInit(): void {
    // 创建一个名为 logZone 的 Zone
    this.logZone = Zone.current.fork({
      name: 'logZone',
      // 当回调被调用时，会由该钩子函数接管回调的触发过程
      onInvoke: (parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source) => {
        console.log(targetZone.name, 'enter');
        // 执行回调
        parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source);
        console.log(targetZone.name, 'leave'); }
    });
  }

  onClick(): void {
    this.logZone.run(() => { // 第一次回调
      console.log(Zone.current.name, 'queue promise');

      Promise.resolve('OK').then((value) => { // 第二次回调
        console.log(Zone.current.name, 'Promise', value);
      });
    });
  }
}


