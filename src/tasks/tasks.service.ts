import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks = [];

    getTasks(){
        return this.tasks;
    }

    addTasks(task:any){
        this.tasks.push(task);
        return task;
    }

    updateTasks(){
        return 'Se actualizo la tarea exitosamente.';
    }

    deleteTasks(){
        return 'Se elimino la tarea.';
    }

    patchTasks(){
        return 'Se actualizo la tarea.';
    }
}
