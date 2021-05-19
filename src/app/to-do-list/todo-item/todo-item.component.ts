import { AfterContentInit, AfterViewChecked, Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ToDo } from '../type';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit, DoCheck, AfterContentInit, AfterViewChecked {
  @Input() toDo: ToDo;
  @Output() completeChange = new EventEmitter<MatCheckboxChange>();

  ngOnInit(): void {
    console.log('child onInit');
  }

  ngDoCheck(): void {
    console.log('child doCheck');
  }

  ngAfterContentInit(): void {
    console.log('child contentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('child viewChecked');
  }
}
