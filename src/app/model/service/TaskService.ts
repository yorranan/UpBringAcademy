import Task from "../entities/Task";

export default class TaskService{
    private _tasks: Task[] = [];

    constructor(){
        this._tasks.push(new Task(
        "Tirar o Lixo",
        "Levar o lixo da cozinha para fora",
        100,
        new Date('2023-09-01T15:30'),
        new Date('2023-09-01T17:30')
        ));
        this._tasks.push(new Task(
            "Andar com o cahcorro",
            "Andar com o Maxiel",
            50,
            new Date('2023-09-02T14:30'),
            new Date('2023-09-02T17:30')
        ));
    }

    obterTodos(): Task[]{
        return this._tasks;
    }

    obterPorId(id: number): Task{
        return this._tasks[id-1];
    }
}