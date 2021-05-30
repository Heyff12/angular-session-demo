import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectorHierarchyService {
  value = 'providedIn service';

  constructor() { }
}
