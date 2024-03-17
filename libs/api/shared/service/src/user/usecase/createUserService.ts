import {
  Assert,
  CreateUserPort,
  CreateUserUseCase,
  Exception,
  FindUserPort,
  Optional,
  StatusCode,
  User,
  UserRepositoryPort,
  UserUseCaseDto
} from '@producktivity/api-domain';

export class CreateUserService implements CreateUserUseCase {
  constructor(private readonly userRepository: UserRepositoryPort) { }

  public async execute(payload: CreateUserPort): Promise<Optional<UserUseCaseDto>> {
    const isUserExist = await this.isUserExist(payload);
    Assert.isFalse(isUserExist, Exception.new({ code: StatusCode.ENTITY_ALREADY_EXISTS }));

    const user: User = User.new({
      firstName: payload.firstName,
      lastName: payload.lastName,
      username: payload.lastName,
    });

    const createdUser = await this.createUser(user);

    if (!createdUser) throw Exception.new({ code: StatusCode.INTERNAL_ERROR });

    return UserUseCaseDto.fromUser(createdUser);
  }

  private async createUser(user: User): Promise<Optional<User>> {
    try {
      const createdUser = await this.userRepository.createUser(user);

      return createdUser;
    } catch (err) {
      return;
    }
  }

  private async isUserExist({ username }: Required<Pick<FindUserPort, 'username'>>): Promise<boolean> {
    try {
      const userCount = await this.userRepository.countUsers({ username });

      return Boolean(userCount);
    } catch (err) {
      return false;
    }
  }
}
