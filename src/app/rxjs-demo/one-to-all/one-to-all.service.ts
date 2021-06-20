import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OneToAllService {
  kill$: Subject<WolfMan>;

  constructor() {
    this.kill$ = new Subject<WolfMan>();
  }

  kill(wolfMan: WolfMan): void {
    this.kill$.next(wolfMan);
  }

  onKill(): Observable<WolfMan> {
    return this.kill$.asObservable();
  }
}


export interface WolfMan {
  id: number;
  equipment?: string;
  ex: number;
}
