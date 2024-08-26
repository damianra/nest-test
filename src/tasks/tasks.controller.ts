import { Controller, Get } from "@nestjs/common";

@Controller({})
export class TasksController{

    @Get('/tasks')
    getAllTasks(){

        // Ejecuta la logica correspondiente.

        return 'Obteniendo todas las tareas.'
    }
}