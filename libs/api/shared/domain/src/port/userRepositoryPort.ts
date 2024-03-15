import { Optional } from '../common/optional';
import { RepositoryFindOptions } from '../common/persistence';
import { User } from '../entity/user';

export interface UserRepositoryPort {
  findUser(by: { user_id?: string }, options?: RepositoryFindOptions): Promise<Optional<User>>;

  countUsers(by: { user_id?: string }, options?: RepositoryFindOptions): Promise<number>;

  addUser(user: User): Promise<{ user_id: string }>;

  updateUser(user: User): Promise<void>;
}
