import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-todo.html',
  styleUrls: ['./add-todo.scss']
})
export class AddTodo {
  title: string   = '';
  desc: string    = '';
  @Output() todoAdd = new EventEmitter<Todo>();

  onSubmit() {
    const todo = {
      sno:8,
      title: this.title,
      desc: this.desc,
      active: true
    };
    this.todoAdd.emit(todo);
  }
}
