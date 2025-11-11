import { Routes } from '@angular/router';
import { Todos } from './MyComponents/todos/todos';
import { About } from './MyComponents/about/about';

export const routes: Routes = [
  { path: '', component: Todos },
  { path: 'about', component: About }
];
