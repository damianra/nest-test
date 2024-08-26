import { Body, Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('/tasks')
export class TasksController{
    constructor(private tasksService:TasksService){}

    @Get()
    getAllTasks(){
        // Ejecuta la logica correspondiente.
        return this.tasksService.getTasks();
    }

    @Post()
    createTask(@Body() task:any){
        return this.tasksService.addTasks(task);
    }

    @Put()
    updateTask(){
        return this.tasksService.updateTasks();
    }

    @Delete()
    deleteTask(){
        return this.tasksService.deleteTasks();
    }

    @Patch()
    patchTask(){
        return this.tasksService.patchTasks();
    }
}