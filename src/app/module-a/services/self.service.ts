import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelfService {
  value = 'root ModuleInjector selfService';
}
