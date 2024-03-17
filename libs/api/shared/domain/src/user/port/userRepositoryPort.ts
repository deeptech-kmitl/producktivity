import { Optional, FindOptions } from '../../common';
import { User } from '../../entity';
import { FindUserPort } from './findUserPort';
import { RemoveUserPort } from './removeUserPort';

export interface UserRepositoryPort {
  findUser(by: FindUserPort, options?: FindOptions): Promise<Optional<User>>;
  countUsers(by: FindUserPort, options?: FindOptions): Promise<number>;
  createUser(user: User): Promise<User>;
  updateUser(user: User): Promise<Optional<User>>;
  removeUser(by: RemoveUserPort): Promise<Optional<User>>;
}
