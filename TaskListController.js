import TaskList from './TaskList.js';

class TaskListContoller {
    constructor() {
        this.taskList = new TaskList();
    }

    addTask(task) {
        this.taskList.addTask(task);
    }

    removeTask(task) {
        this.taskList.removeTask(task);
    }

    getTasks() {
        return this.taskList.getTasks();
    }
}