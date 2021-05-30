import { Component, OnInit } from '@angular/core';
import { InjectorHierarchyService } from '../../../services/injector-hierarchy.service';

@Component({
  selector: 'app-parent-b',
  templateUrl: './parent-b.component.html',
  styleUrls: ['./parent-b.component.scss'],
  providers: [ { provide: InjectorHierarchyService, useValue: { value: 'parent component' } }]
})
export class ParentBComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
