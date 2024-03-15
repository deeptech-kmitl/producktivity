import { Entity } from '../common/entity';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { Nullable } from '../common/nullable';
import { CreateUserPayload } from '../model';
import { typeid } from 'typeid-js';

export class User extends Entity<string> {
  @IsString()
  username: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsDate()
  createdAt: Date;

  @IsOptional()
  @IsDate()
  updatedAt: Nullable<Date>;

  @IsOptional()
  @IsDate()
  deletedAt: Nullable<Date>;

  constructor(payload: CreateUserPayload) {
    super();

    this.id = typeid('user').toString();
    this.firstName = payload.firstName;
    this.lastName = payload.lastName;
    this.createdAt = new Date();
  }

  static new(payload: CreateUserPayload): User {
    return new User(payload);
  }
}
