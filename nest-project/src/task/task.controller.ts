import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    const numberId = Number(id);
    return this.taskService.findById(numberId);
  }

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.taskService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    const numberId = Number(id);
    return this.taskService.update(numberId, dto);
  }

  @Patch(':id')
  patchTask(@Param('id') id: string, @Body() dto: Partial<UpdateTaskDto>) {
    const numberId = Number(id);
    return this.taskService.patchTask(numberId, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const numberId = Number(id);
    return this.taskService.delete(numberId);
  }
}
