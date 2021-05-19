import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToDoListComponent } from './to-do-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { ListComponent } from './list/list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { MatBadgeModule } from '@angular/material/badge';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IsEmptyPipe } from './_common/pipes/is-empty.pipe';


@NgModule({
  declarations: [
    ToDoListComponent,
    ListComponent,
    TodoItemComponent,
    IsEmptyPipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    FormsModule,
    MatBadgeModule,
    MatDividerModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class ToDoListModule { }
