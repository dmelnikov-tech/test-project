import {
  IsString,
  IsNotEmpty,
  Length,
  IsOptional,
  IsPositive,
  IsInt,
  IsArray,
  IsEnum,
  Min,
  Max,
  Matches,
  MinLength,
  IsUrl,
  IsUUID,
} from 'class-validator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
  OTHER = 'other',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  @IsPositive()
  @Min(1)
  @Max(5)
  @IsOptional()
  priority: number;

  @IsArray()
  @IsEnum(TaskTag, { each: true })
  @IsOptional()
  tags: TaskTag[];

  @IsString()
  @MinLength(6)
  @Matches(/^[a-zA-Z0-9_-]*$/, {
    message:
      'Password must contain only letters, numbers, underscores and hyphens',
  })
  @IsOptional()
  password: string;

  @IsString()
  @IsUrl({
    require_protocol: true,
    protocols: ['https'],
    host_whitelist: ['google.com', 'yandex.ru'],
  })
  @IsOptional()
  websiteUrl: string;

  @IsUUID()
  @IsOptional()
  userId: string;
}
