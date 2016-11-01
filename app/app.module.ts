import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToDoComponent }   from './app.todo';
import { FormsModule } from '@angular/forms';
import { OrderByPipe }   from './pipes/order-by-pipe';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        ToDoComponent,
        OrderByPipe
    ],
    bootstrap:    [ ToDoComponent ]
})
export class AppModule { }
