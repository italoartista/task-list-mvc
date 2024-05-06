// import { TaskListView } from './TaskListView.js';
import { Task } from './models/Task.js';
import { TaskList } from './TaskList.js';
// let taskListView = new TaskListView();
// taskListView.render();

let taskList = new TaskList();

let task = new Task('Task 1', 'Descrição 1', '06-05-2024', 'Alta', 'Formação Full Stack');

taskList.addTask(task);


// let { name, description, dueDate, priority, project } = task 

// console.log(task.name); // Task 1
// console.log(task.description); // Descrição 1
// console.log(task.dueDate); // 06-05-2024
// console.log(task.priority); // Alta
// console.log(task.project); // Formação Full Stack

