import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private firestore: AngularFirestore) {
  }

  getTasks(): any {
    return this.firestore.collection('tasks').snapshotChanges();
  }

  createTask(_Task: ITask): any {
    return this.firestore.collection('tasks').add(_Task);
  }

  updateTask(_TaskID: number, _Task: Task): void {
    this.firestore.doc('tasks/' + _TaskID).update(_Task);
  }

  deleteTask(_TaskID: string): void {
    this.firestore.doc('tasks/' + _TaskID).delete();
  }

}

export interface ITask {
  id?: number;
  title: string;
  state: boolean;
}

export class Task implements ITask {
  id?: number;
  title: string;
  state: boolean;
}
