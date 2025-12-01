import { Controller, Get, Post, Body } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie-dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async findAll() {
    return await this.movieService.findAll();
  }

  @Post()
  async create(@Body() dto: CreateMovieDto) {
    return await this.movieService.create(dto);
  }
}
