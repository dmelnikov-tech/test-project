import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty()
  @IsString()
  content: string;
  @IsNotEmpty()
  @IsInt()
  movieId: number;
}
