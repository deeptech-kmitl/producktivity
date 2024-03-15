import { Entity } from '../common/entity';
import { IsDate, IsEmail, IsOptional, IsString } from 'class-validator';
import { Nullable } from '../common/nullable';

export class User extends Entity<string> {
  @IsString()
  private username: string;

  @IsEmail()
  private email: string;

  @IsString()
  private firstName: string;

  @IsString()
  private lastName: string;

  @IsDate()
  private createdAt: Date;

  @IsOptional()
  @IsDate()
  private updatedAt: Nullable<Date>;

  @IsOptional()
  @IsDate()
  private deletedAt: Nullable<Date>;
}
