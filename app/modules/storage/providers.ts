import {Task} from "../../entities/task";
/**
 * Created by artem on 31.10.2016.
 */
namespace Providers {
    export interface StorageProviderInterface {
        get(name: string): any;
        set(name: string, value: string): void;
    }
    export class LocalStorageProvider implements StorageProviderInterface {
        get(name) {
            return localStorage.getItem(name);
        }
        set(name, value) {
            return localStorage.setItem(name, value);
        }
    }
    export class CookieStorageProvider implements StorageProviderInterface {
        //constructor(private _cookieService:CookieService){}
        get(name) {
            return CookieService.get(name);
        }
        set(name, value) {
            var date = new Date();
            date.setTime(+ date + (365 * 86400000));
            return CookieService.put(name, value, {expires: date});
        }
    }
}

export class AbstractStorageProvider {
    tasksFieldId: string = 'tasks';
    storage: Providers.StorageProviderInterface;
    constructor(private storageProviderName) {
        if (typeof Providers[storageProviderName] !== 'undefined') {
            this.storage = new Providers[storageProviderName]();
        } else {
            throw('Wrong storage name: ' + storageProviderName);
        }
    }
    get(name) {
        return this.storage.get(name);
    }
    set(name, value): void {
        return this.storage.set(name, value);
    }
    getTasks(): Task[] {
        var tasks = this.get(this.tasksFieldId);
        if (!tasks){
            tasks = '[]';
        }
        return JSON.parse(tasks);
    }
    setTasks(tasks: Task[]) {
        return this.set(this.tasksFieldId, JSON.stringify(tasks));
    }
}

