import { Component } from '@angular/core';
import { StorageProvider } from './modules/storage/providers';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/todo-form.html'
})

export class ToDoComponent {
    title: string;
    provider: any;

    constructor() {
        this.title = '';
        this.provider = new StorageProvider('LocalStorageProvider');
    }

    /**
     * Adds task object to storage
     * @param event
     */
    addTask(event) {
        this.provider.add({title: this.title, completed:false});
        this.title = '';
        event.preventDefault();
    }

    /**
     * Removes task object from storage
     * @param index
     */
    deleteTask(index) {
       this.provider.delete(index);
    }

    /**
     * Marks task as read
     * @param index
     */
    toggleCompleted(index) {
        this.provider.toggleCompleted(index);
    }
}
