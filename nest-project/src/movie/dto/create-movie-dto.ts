import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear() + 20)
  releaseYear: number;
}
