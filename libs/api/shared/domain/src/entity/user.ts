import { Entity, Nullable } from '../common';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { CreateUserPayload } from '../user';
import { typeid } from 'typeid-js';

export class User extends Entity<string> {
  @IsString()
  public readonly username: string;

  @IsString()
  public readonly firstName: string;

  @IsString()
  public readonly lastName: string;

  @IsDate()
  public readonly createdAt: Date;

  @IsOptional()
  @IsDate()
  public readonly updatedAt: Nullable<Date>;

  @IsOptional()
  @IsDate()
  public readonly deletedAt: Nullable<Date>;

  private constructor(payload: CreateUserPayload) {
    super();

    this.id = typeid('user').toString();
    this.firstName = payload.firstName;
    this.lastName = payload.lastName;
    this.createdAt = new Date();
  }

  public static new(payload: CreateUserPayload): User {
    return new User(payload);
  }
}
