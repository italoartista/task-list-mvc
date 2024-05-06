
class TaskList { 
    constructor(name) {
        this.name = name
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
        console.log(this)
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