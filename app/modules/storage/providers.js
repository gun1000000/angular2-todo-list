"use strict";
var task_1 = require('../../entities/task');
/**
 * Created by artem on 31.10.2016.
 */
var Providers;
(function (Providers) {
    var LocalStorageProvider = (function () {
        function LocalStorageProvider() {
        }
        LocalStorageProvider.prototype.get = function () {
            var tasks = localStorage.getItem('tasks');
            if (!tasks) {
                tasks = '[]';
            }
            return JSON.parse(tasks);
        };
        LocalStorageProvider.prototype.set = function (tasks) {
            return localStorage.setItem('tasks', JSON.stringify(tasks));
        };
        return LocalStorageProvider;
    }());
    Providers.LocalStorageProvider = LocalStorageProvider;
})(Providers || (Providers = {}));
var StorageProvider = (function () {
    function StorageProvider(storageProviderName) {
        this.storageProviderName = storageProviderName;
        if (typeof Providers[storageProviderName] !== 'undefined') {
            this.storage = new Providers[storageProviderName]();
        }
        else {
            throw ('Wrong storage name: ' + storageProviderName);
        }
        var preparedTasks = [];
        this.storage.get().map(function (obj) {
            preparedTasks.push(new task_1.Task(obj['title'], obj['completed']));
        });
        this.tasks = preparedTasks;
    }
    StorageProvider.prototype.add = function (task) {
        this.tasks.push(task);
        this.storage.set(this.tasks);
    };
    StorageProvider.prototype.getAll = function () {
        return this.tasks;
    };
    StorageProvider.prototype.delete = function (index) {
        if (typeof this.tasks[index] !== 'undefined') {
            this.tasks.splice(index, 1);
            this.storage.set(this.tasks);
            return true;
        }
        else {
            return false;
        }
    };
    StorageProvider.prototype.toggleCompleted = function (index) {
        if (typeof this.tasks[index] !== 'undefined') {
            this.tasks[index].completed = !this.tasks[index].completed;
            this.storage.set(this.tasks);
            return true;
        }
        else {
            return false;
        }
    };
    return StorageProvider;
}());
exports.StorageProvider = StorageProvider;
//# sourceMappingURL=providers.js.map