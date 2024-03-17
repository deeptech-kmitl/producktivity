import { User } from '../../entity';
import { Exclude, Expose, plainToClass } from 'class-transformer';

@Exclude()
export class UserUseCaseDto {
  @Expose()
  public readonly username: string;

  @Expose()
  public readonly firstName: string;

  @Expose()
  public readonly lastName: string;

  public static fromUser(user: User): UserUseCaseDto {
    return plainToClass(UserUseCaseDto, user);
  }

  public static fromUsers(users: User[]): UserUseCaseDto[] {
    return users.map(this.fromUser);
  }
}
