import { Injectable } from '@angular/core';
import { BehaviorSubject, from, interval, Observable, Subject } from 'rxjs';
import { concatMap, filter, flatMap, map, mapTo, take, tap } from 'rxjs/internal/operators';

export interface Character {
  hp: number;
  atk: number;
  def: number;
  agi: number;
  info: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameDemoService {

  private startScriptChange$: BehaviorSubject<string>;
  yuusyaAttack$: Subject<any>;
  maouAttack$: Subject<any>;
  yuusya$: BehaviorSubject<Character>;
  maou$: BehaviorSubject<Character>;
  round$: Observable<any>;
  yuusyaStep: number;
  maouStep: number;

  constructor() {
    this.startScriptChange$ = new BehaviorSubject<string>('');
    this.yuusya$ = new BehaviorSubject<Character>({
      hp: 200,
      atk: 5,
      def: 2,
      agi: 3,
      info: ''
    });
    this.maou$ = new BehaviorSubject<Character>({
      hp: 300,
      atk: 5,
      def: 3,
      agi: 2,
      info: ''
    });
    this.yuusyaAttack$ = new Subject<any>();
    this.maouAttack$ = new Subject<any>();
    this.yuusyaStep = 0;
    this.maouStep = 0;
  }

  gameInit(): void {
    this.round$ = interval(300).pipe(
      take(30 * 1000 / 300),
    );
    this.yuusyaAttack$.subscribe(() => {
      const date = new Date();
      this.maou$.next({
        ...this.maou$.value,
        hp: this.maou$.value.hp - this.yuusya$.value.atk,
        info: `${ date.getHours() }:${ date.getMinutes() }:${ date.getSeconds() }: 勇者发动攻击，对魔王造成${ this.yuusya$.value.atk }点伤害`
      });
    });
    this.maouAttack$.subscribe(() => {
      const date = new Date();
      this.yuusya$.next({
        ...this.yuusya$.value,
        hp: this.yuusya$.value.hp - this.maou$.value.atk,
        info: `${ date.getHours() }:${ date.getMinutes() }:${ date.getSeconds() } : 魔王发动攻击，对勇者造成${ this.maou$.value.atk }点伤害`
      });
    });
  }

  onScriptTextChange(): Observable<string> {
    return this.startScriptChange$.pipe(
      flatMap(text => from(text.split(''))),
      concatMap(s => interval(100).pipe(
        take(1),
        mapTo(s)
      ))
    );
  }

  nextScriptText(text: string): void {
    this.startScriptChange$.next(text);
  }

  yuusyaStart(): void {
    this.round$.pipe(
      map(() => {
        this.yuusyaStep += this.yuusya$.value.agi;
        return this.yuusyaStep;
      }),
      filter(s => s >= 10),
      tap(() => this.yuusyaStep -= 10),
    ).subscribe(() => {
      console.log('attack');
      this.yuusyaAttack$.next();
    });
  }

  maouStart(): void {
    this.round$.pipe(
      map(() => {
        this.maouStep += this.maou$.value.agi;
        return this.maouStep;
      }),
      filter(s => s >= 10),
      tap(() => this.maouStep -= 10),
    ).subscribe(() => {
      console.log('attack');
      this.maouAttack$.next();
    });
  }

  private fightIsOver(): boolean {
    return this.yuusya$.value.hp === 0 || this.maou$.value.hp === 0;
  }
}
