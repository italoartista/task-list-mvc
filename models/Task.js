class Task { 
    constructor(name, description, dueDate, priority, project) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.creationDate = new Date();
        console.log(this)
    }
    setName(name) {
        this.name = name;
    }

}

export { Task };

let name = 'Task 1';