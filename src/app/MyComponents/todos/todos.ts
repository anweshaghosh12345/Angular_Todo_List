import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { AddTodo } from '../add-todo/add-todo';
import { TodoItem } from '../todo-item/todo-item';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [AddTodo, TodoItem, CommonModule],
  templateUrl: './todos.html',
  styleUrls: ['./todos.scss']
})
export class Todos implements OnInit {
 todos: Todo[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  
  }

  ngOnInit(): void {
    
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('todos');
      this.todos = saved ? JSON.parse(saved) : [];
    }
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.saveToLocalStorage();
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
    this.saveToLocalStorage();
  }
  toggleTodo(todo: Todo) {
    const index=this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    this.saveToLocalStorage();
    console.log(this.todos);
  }

  private saveToLocalStorage() {
    // ✅ Also guard here for SSR
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

}