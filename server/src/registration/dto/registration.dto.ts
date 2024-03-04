import { IsString } from 'class-validator';

export class RegistrationDto {
  @IsString()
  email: string;

  @IsString()
  nickname: string;

  @IsString()
  password: string;
}
