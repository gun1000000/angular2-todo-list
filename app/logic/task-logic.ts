/**
 * Created by artem on 01.11.2016.
 */

import { Task } from '../entities/task';
import { AbstractStorageProvider } from '../modules/storage/providers';

export class TaskLogic {
    tasks: Task[];
    provider: AbstractStorageProvider;
    increment: number;
    constructor(providerName: string) {
        this.provider = new AbstractStorageProvider(providerName);
        var preparedTasks = [];
        var increment = 1;
        this.provider.getTasks().map(function(obj) {
            // Set increment
            if (obj['id'] > increment) {
                increment = obj['id'];
            }
            preparedTasks.push(new Task(obj['id'], obj['title'], obj['completed']));
        });
        this.increment = increment;
        this.tasks = preparedTasks;
    }
    add(title: string, completed:boolean): void{
        this.tasks.push(new Task(++this.increment, title, completed));
        this.provider.setTasks(this.tasks);
    }
    getAll(): Task[]{
        return this.tasks;
    }
    edit(id: number, title: string): void {
        this.tasks.map(function(task){
            if (task.id == id) {
                task.title = title;
                return false;
            }
        });
        this.provider.setTasks(this.tasks);
    }
    delete(id: number): void {
        var index = -1;
        this.tasks.map(function(task, i){
            if (task.id == id) {
                index = i;
                return false;
            }
        });

        if (index > -1) {
            this.tasks.splice(index, 1);
            this.provider.setTasks(this.tasks);
        }
    }
    toggleCompleted(id: number): void {
        this.tasks.map(function(task){
            if (task.id == id) {
                task.completed = !task.completed;
                return false;
            }
        });
        this.provider.setTasks(this.tasks);
    }
}