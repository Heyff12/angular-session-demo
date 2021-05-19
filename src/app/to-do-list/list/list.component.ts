import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ToDo } from '../type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() toDos: ToDo[];

  @Output() toDoChange = new EventEmitter<ToDo>();

  constructor() { }

  onCompleteChange(toDo: ToDo, change: MatCheckboxChange): void {
    this.toDoChange.emit({
      ...toDo,
      complete: change.checked
    });
  }

}
