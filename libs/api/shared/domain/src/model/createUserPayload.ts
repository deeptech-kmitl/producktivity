import { IsEmail, IsString } from 'class-validator';

export class CreateUserPayload {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}
