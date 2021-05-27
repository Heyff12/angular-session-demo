import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkipSelfService {
  value = 'root ModuleInjector skipSelfService';
}
