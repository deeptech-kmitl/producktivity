import { IsString } from 'class-validator';

export class CreateUserPayload {
  @IsString()
  public readonly username: string;

  @IsString()
  public readonly firstName: string;

  @IsString()
  public readonly lastName: string;
}
