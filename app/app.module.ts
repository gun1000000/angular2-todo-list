import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToDoComponent }   from './app.todo';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [ ToDoComponent ],
    bootstrap:    [ ToDoComponent ]
})
export class AppModule { }
