"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var providers_1 = require('./modules/storage/providers');
var ToDoComponent = (function () {
    function ToDoComponent() {
        this.title = '';
        this.provider = new providers_1.StorageProvider('LocalStorageProvider');
    }
    /**
     * Adds task object to storage
     * @param event
     */
    ToDoComponent.prototype.addTask = function (event) {
        this.provider.add({ title: this.title, completed: false });
        this.title = '';
        event.preventDefault();
    };
    /**
     * Removes task object from storage
     * @param index
     */
    ToDoComponent.prototype.deleteTask = function (index) {
        this.provider.delete(index);
    };
    /**
     * Marks task as read
     * @param index
     */
    ToDoComponent.prototype.toggleCompleted = function (index) {
        this.provider.toggleCompleted(index);
    };
    ToDoComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/todo-form.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ToDoComponent);
    return ToDoComponent;
}());
exports.ToDoComponent = ToDoComponent;
//# sourceMappingURL=app.todo.js.map