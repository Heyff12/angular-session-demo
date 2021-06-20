import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AllToOneService {
  name$: BehaviorSubject<string>;
  union$: BehaviorSubject<string>;
  character$: BehaviorSubject<string>;
  fav$: BehaviorSubject<boolean>;

  constructor() {
    this.name$ = new BehaviorSubject<string>(null);
    this.union$ = new BehaviorSubject<string>(null);
    this.character$ = new BehaviorSubject<string>(null);
    this.fav$ = new BehaviorSubject<boolean>(null);
  }

  filterChange(): Observable<{ name: string, union: string, character: string, fav: boolean }> {
    return combineLatest([this.name$, this.union$, this.character$, this.fav$])
      .pipe(
        map(([name, union, character, fav]) => ({
          name,
          union,
          character,
          fav
        })),
        tap(o => console.log(o))
      );
  }
}
