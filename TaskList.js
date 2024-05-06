import { Task } from './Task.js';

class TaskList { 
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    removeTask(task) {
        let index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
    }
    getTasks() {
        return this.tasks;
    }
    getTask(name) {
        return this.tasks.find(task => task.name === name);
    }
    getTaskIndex(name) {
        return this.tasks.findIndex(task => task.name === name);
    }
}

export { TaskList };