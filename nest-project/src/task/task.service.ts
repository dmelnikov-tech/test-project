import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'Create a new NestJS project',
      isCompleted: true,
    },
    {
      id: 2,
      title: 'Learn NestJS',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Build a simple API',
      isCompleted: false,
    },
  ];

  findAll() {
    return this.tasks;
  }

  findById(id: number) {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }

  create(dto: CreateTaskDto) {
    const { title, description, priority, tags, password, websiteUrl, userId } =
      dto;

    const newTask = {
      id: this.tasks.length + 1,
      title: title,
      description,
      priority,
      tags,
      password,
      websiteUrl,
      userId,
      isCompleted: false,
    };

    this.tasks.push(newTask);
    return newTask;
  }

  update(id: number, dto: UpdateTaskDto) {
    const { title, isCompleted } = dto;
    const task = this.findById(id);

    task.title = title;
    task.isCompleted = isCompleted;
    return task;
  }

  patchTask(id: number, dto: Partial<UpdateTaskDto>) {
    const task = this.findById(id);

    Object.assign(task, dto);

    return task;
  }

  delete(id: number) {
    const task = this.findById(id);
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
    return task;
  }
}
