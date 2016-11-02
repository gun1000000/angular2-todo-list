import { Component,Pipe } from '@angular/core';
import { Task } from './entities/task';
import { TaskLogic } from './logic/task-logic';
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/todo-form.html',
})

export class ToDoComponent {
    title: string = '';
    edit: boolean = false;
    logic: TaskLogic;
    providers: string[] = ['LocalStorageProvider', 'CookieStorageProvider']
    storageProvider: string = 'LocalStorageProvider';
    constructor() {
        this.initLogic();
    }

    initLogic() {
        this.logic = new TaskLogic(this.storageProvider);
    }

    /**
     * Adds task object to storage
     * @param event
     */
    addTask(event) {
        this.logic.add(this.title, false);
        this.title = '';
        event.preventDefault();
    }

    /**
     * Edit task title
     * @param id
     * @param title
     */
    editTask(id, title) {
       this.logic.edit(id, title);
    }

    /**
     * Marks task as read
     * @param id
     */
    toggleCompleted(id) {
        this.logic.toggleCompleted(id);
    }

    /**
     * Removes task object from storage
     * @param id
     */
    deleteTask(id) {
       this.logic.delete(id);
    }

    changeProvider() {
        this.initLogic();
    }
}
