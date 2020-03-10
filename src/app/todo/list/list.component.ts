import {Component, HostListener, OnInit, Pipe, PipeTransform} from '@angular/core';
import {ITask, Task, TodoService} from '../todo.service';
import {Subscription} from 'rxjs';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class TodoListComponent implements OnInit {

  task: string = null;
  taskList: ITask[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTasks().subscribe(data => {
      this.taskList = data.map(e => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['title'],
          state: e.payload.doc.data()['state']
        } as ITask;
      });
    });
  }

  create(): void {
    if (!this.task) {
      return;
    }

    this.todoService.createTask({
      title: this.task,
      state: false
    });

    this.task = null;
  }

  update(_Task: ITask): void {
    this.todoService.updateTask(_Task.id, {
      title: _Task.title,
      state: _Task.state
    });
  }

  delete(_TaskID: string): void {
    this.todoService.deleteTask(_TaskID);
  }

  // Mjenjanje viewa timelinea
  @HostListener('click', ['$event'])
  onKeydownHandler(event: any): void {
    if (!event.target.className.includes('task')) {
      return;
    }

    const classes = event.target.className.split(' ');

    if (event.altKey && event.type === 'click') {
      this.delete(classes[1]);
    }
  }
}
