import { Entity } from '../common/entity';
import { IsDate, IsEmail, IsOptional, IsString, IsUrl } from 'class-validator';
import { CreateUserPayload } from '../model/createUserPayload';
import { typeid } from 'typeid-js';
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

  @IsOptional()
  @IsUrl()
  private profileImage: string;

  @IsDate()
  private createdAt: Date;

  @IsOptional()
  @IsDate()
  private updatedAt: Nullable<Date>;

  @IsOptional()
  @IsDate()
  private deletedAt: Nullable<Date>;

  constructor(payload: CreateUserPayload) {
    super();

    this.username = payload.username;
    this.email = payload.email;
    this.firstName = payload.firstName;
    this.lastName = payload.lastName;
    this.profileImage = payload.profileImage;
    this.email = payload.email;

    this.id = typeid('user').toString();
    this.createdAt = new Date();
    this.updatedAt = null;
    this.deletedAt = null;
  }

  getUsername(): string {
    return this.username;
  }

  getEmail(): string {
    return this.email;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getProfileImage(): string {
    return this.profileImage;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Nullable<Date> {
    return this.updatedAt;
  }

  getDeletedAt(): Nullable<Date> {
    return this.deletedAt;
  }
}
