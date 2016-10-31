import { Task } from '../../entities/task';
/**
 * Created by artem on 31.10.2016.
 */
namespace Providers {
    export interface StorageProviderInterface {
        get(): Object[];
        set(tasks: Object[]): void;
    }
    export class LocalStorageProvider implements StorageProviderInterface {
        get(): Object[] {
            var tasks = localStorage.getItem('tasks');
            if (!tasks){
                tasks = '[]';
            }
            return JSON.parse(tasks);
        }
        set(tasks: Object[]): void {
            return localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }
}

export class StorageProvider {
    storage: Providers.StorageProviderInterface;
    tasks: Task[];
    constructor(private storageProviderName) {
        if (typeof Providers[storageProviderName] !== 'undefined') {
            this.storage = new Providers[storageProviderName]();
        } else {
            throw('Wrong storage name: ' + storageProviderName);
        }
        var preparedTasks = [];
        this.storage.get().map(function(obj) {
            preparedTasks.push(new Task(obj['title'], obj['completed']));
        });
        this.tasks = preparedTasks;
    }
    add(task: Task): void{
        this.tasks.push(task);
        this.storage.set(this.tasks);
    }
    getAll(): Task[]{
        return this.tasks;
    }
    delete(index: number): boolean {
        if (typeof this.tasks[index] !== 'undefined') {
            this.tasks.splice(index, 1);
            this.storage.set(this.tasks);
            return true;
        } else {
            return false;
        }
    }
    toggleCompleted(index: number): boolean {
        if (typeof this.tasks[index] !== 'undefined') {
            this.tasks[index].completed = !this.tasks[index].completed;
            this.storage.set(this.tasks);
            return true;
        } else {
            return false;
        }
    }
}

