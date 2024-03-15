import { IsString } from 'class-validator';

export class CreateUserPayload {
  @IsString()
  username: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}
