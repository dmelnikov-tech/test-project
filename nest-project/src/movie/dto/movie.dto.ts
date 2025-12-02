import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

export class MovieDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @Length(1, 5000)
  description: string;
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(10)
  @IsOptional()
  rating: number;
  @IsNotEmpty()
  @IsBoolean()
  @IsOptional()
  isAvailable: boolean;
  @IsNotEmpty()
  @IsDateString()
  releaseDate: Date;
}
