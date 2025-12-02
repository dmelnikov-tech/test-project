import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieDto } from './dto/movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async findAll() {
    return await this.movieService.findAll();
  }

  @Post()
  async create(@Body() dto: MovieDto) {
    return await this.movieService.create(dto);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const numberId = Number(id);
    return await this.movieService.findById(numberId);
  }

  @Put(':id')
  @HttpCode(204)
  async update(@Param('id') id: string, @Body() dto: MovieDto) {
    const numberId = Number(id);
    return await this.movieService.update(numberId, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const numberId = Number(id);
    return await this.movieService.delete(numberId);
  }
}
