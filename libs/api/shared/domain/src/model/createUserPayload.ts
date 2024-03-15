import { IsEmail, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateUserPayload {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsOptional()
  @IsUrl()
  profileImage: string;
}
