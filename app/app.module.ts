import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToDoComponent }   from './app.todo';
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ ToDoComponent ],
    bootstrap:    [ ToDoComponent ]
})
export class AppModule { }
