import { Component } from '@angular/core';

export class Task {
    constructor(public title: string, public completed: boolean) {}
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/todo-form.html'
})

export class ToDoComponent {
    title: string;
    tasks: any;

    constructor() {
        this.title = '';
        this.tasks = [];
    }

    /**
     * Adds task object to storage
     * @param event
     */
    addTask(event) {
        this.tasks.push(new Task(this.title, false));
        this.title = '';
        event.preventDefault();
    }

    /**
     * Removes task object from storage
     * @param index
     */
    deleteTask(index) {
        this.tasks.splice(index, 1);
    }
}
