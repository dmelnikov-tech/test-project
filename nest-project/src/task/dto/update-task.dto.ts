import { IsString, IsNotEmpty, Length, IsBoolean } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  title: string;
  @IsBoolean()
  isCompleted: boolean;
}
