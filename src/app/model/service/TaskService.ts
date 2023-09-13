import { Injectable } from "@angular/core";
import Task from "../entities/Task";
import ICRUDService from "./ICRUDService";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
    providedIn: 'root'
})
export default class TaskService implements ICRUDService<Task> {
    private PATH: string = 'tasks'

    constructor(private firestore: AngularFirestore){}

    create(task: Task){
        task.conclusionDateTime = [];
        return this.firestore.collection(this.PATH).add(mapper(task));
    }

    read(id: string){
        return this.firestore.collection(this.PATH).doc(id).snapshotChanges();
    }

    update(id: string, task: Task){
        return this.firestore.collection(this.PATH).doc(id).update(mapper(task))
    }

    delete(id: string){
        return this.firestore.collection(this.PATH).doc(id).delete()
    }
}

function mapper(task: Task){
    return{
        name: task.name,
        description: task.description,
        points: task.points,
        beginDateTime: task.beginDateTime,
        endDateTime: task.endDateTime,
        conclusionDateTime: task.conclusionDateTime,
        parentId: task.parentId,
    }
}
