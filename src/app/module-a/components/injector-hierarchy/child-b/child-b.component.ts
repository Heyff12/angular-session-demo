import { Component, OnInit } from '@angular/core';
import { InjectorHierarchyService } from '../../../services/injector-hierarchy.service';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss'],
  providers: [ { provide: InjectorHierarchyService, useValue: { value: 'child component' } }]
})
export class ChildBComponent implements OnInit {

  constructor(public injectorHierarchyService: InjectorHierarchyService) { }

  ngOnInit(): void {
  }

}
