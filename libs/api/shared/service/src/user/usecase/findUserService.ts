import {
  Exception,
  FindUserPort,
  FindUserUseCase,
  Optional,
  StatusCode,
  User,
  UserRepositoryPort,
  UserUseCaseDto
} from '@producktivity/api-domain';

export class FindUserService implements FindUserUseCase {
  constructor(private readonly userRepository: UserRepositoryPort) { }

  public async execute(payload: FindUserPort): Promise<Optional<UserUseCaseDto>> {
    const user = await this.findUser(payload);

    if (!user) throw Exception.new({ code: StatusCode.ENTITY_NOT_FOUND, message: 'User not found.' });

    return UserUseCaseDto.fromUser(user);
  }

  private async findUser(payload: FindUserPort): Promise<Optional<User>> {
    try {
      const user = await this.userRepository.findUser(payload);

      return user;
    } catch (err) {
      return;
    }
  }
}
