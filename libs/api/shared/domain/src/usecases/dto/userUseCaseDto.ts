import { User } from '../../entity/user';
import { Exclude, Expose, plainToClass } from 'class-transformer';

@Exclude()
export class UserUseCaseDto {
  @Expose()
  public username: string;

  @Expose()
  public firstName: string;

  @Expose()
  public lastName: string;

  public static newFromUser(user: User): UserUseCaseDto {
    return plainToClass(UserUseCaseDto, user);
  }

  public static newListFromUsers(users: User[]): UserUseCaseDto[] {
    return users.map((user) => this.newFromUser(user));
  }
}
