import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToDo } from './type';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  completeToDos: ToDo[];
  incompleteToDos: ToDo[];
  task: FormControl = new FormControl();

  ngOnInit(): void {
    this.completeToDos = [];
    this.incompleteToDos = [
      {
        task: 'My first to-do',
        id: String(new Date()),
        complete: false
      }
    ];
  }

  addToDo(): void {
    const newTodo: ToDo = {
      id: String(new Date()),
      complete: false,
      task: this.task.value
    };
    this.incompleteToDos.unshift(newTodo);
    this.task.reset();
  }


  onCompleteToDo(toDo: ToDo): void {
    this.incompleteToDos = this.incompleteToDos.filter(item => item.id !== toDo.id);
    this.completeToDos.push(toDo);
  }

  onIncompleteToDo(toDo: ToDo): void {
    this.completeToDos = this.completeToDos.filter(item => item.id !== toDo.id);
    this.incompleteToDos.push(toDo);
  }
}
