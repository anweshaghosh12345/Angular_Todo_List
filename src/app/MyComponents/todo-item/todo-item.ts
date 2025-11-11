import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.html',
  styleUrls: ['./todo-item.scss']
})
export class TodoItem {
  @Input() todo!: Todo;
@Input() i!: number;
  @Output() todoDelete = new EventEmitter<Todo>();
  @Output() todoCheckBox = new EventEmitter<Todo>();

  onDelete(todo: Todo) {
    console.log('Child emitting delete for:', this.todo);
    this.todoDelete.emit(this.todo);
  }
  OnCheckboxClick(todo: Todo) {
    // this.todo.active=!this.todo.active;
    console.log('Child emitting checkbox toggle for:', this.todo);
    this.todoCheckBox.emit(this.todo);
  }
}
