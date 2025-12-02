import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { MovieDto } from './dto/movie.dto';
import { ActorService } from 'src/actor/actor.service';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
    private readonly actorService: ActorService,
  ) {}

  async findAll(): Promise<MovieEntity[]> {
    return await this.movieRepository.find({
      where: { isAvailable: true },
      order: { createdAt: 'DESC' },
      relations: ['actors'],
    });
  }

  async create(dto: MovieDto): Promise<MovieEntity> {
    const { actorIds } = dto;
    const actors = await this.actorService.findActorsByIds(actorIds);
    if (!actors || !actors.length || actors.length !== actorIds.length) {
      throw new NotFoundException('One or more actors were not found');
    }
    const movie = this.movieRepository.create({
      ...dto,
      actors,
    });
    return await this.movieRepository.save(movie);
  }

  async findById(id: number): Promise<MovieEntity> {
    const movie = await this.movieRepository.findOne({
      where: { id },
      relations: ['actors'],
    });
    if (!movie) {
      throw new NotFoundException('Movie not found');
    }
    return movie;
  }

  async update(id: number, dto: MovieDto): Promise<boolean> {
    const movie = await this.findById(id);
    Object.assign(movie, dto);
    await this.movieRepository.save(movie);
    return true;
  }

  async delete(id: number): Promise<boolean> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) {
      throw new NotFoundException('Movie not found');
    }
    await this.movieRepository.remove(movie);
    return true;
  }
}
