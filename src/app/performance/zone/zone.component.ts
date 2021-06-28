import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone-component',
  templateUrl: './zone.component.html',
})
export class ZoneComponent implements OnInit {
  logZone: Zone;

  ngOnInit(): void {
    this.logZone = Zone.current.fork({
      name: 'logZone',
      onInvoke: (parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source) => {
        console.log(targetZone.name, 'enter');
        parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source);
        console.log(targetZone.name, 'leave'); }
    });
  }

  onRunLogZoneClick(): void {
    this.logZone.run(() => {
      console.log(Zone.current.name, 'queue promise');
      Promise.resolve('OK').then((value) => {
        console.log(Zone.current.name, 'Promise', value);
      });
    });
  }
}


