class TaskListView {
    constructor() {
        this.taskListController = new TaskListController();
    }
    render() {
        let tasks = this.taskListController.getTasks();
        let taskList = document.querySelector('#task-list');
        taskList.innerHTML = '';
        tasks.forEach(task => {
            let taskElement = document.createElement('li'); // <li></li>
            taskElement.textContent = task.name; // <li>Task 1</li>
            taskList.appendChild(taskElement);
        });
    }
    addTask(task) {
        this.taskListController.addTask(task);
        this.render();
    }
    removeTask(task) {
        this.taskListController.removeTask(task);
        this.render();
    }
}