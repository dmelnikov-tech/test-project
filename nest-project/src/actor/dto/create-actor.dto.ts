import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateActorDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 128)
  name: string;
}
