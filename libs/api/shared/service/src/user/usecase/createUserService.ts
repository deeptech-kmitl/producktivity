import { CoreAssert, CreateUserPort, CreateUserUseCase, Exception, StatusCode, User, UserRepositoryPort, UserUseCaseDto } from '@producktivity/api-domain';

export class CreateUserService implements CreateUserUseCase {
  constructor(private readonly userRepository: UserRepositoryPort) {}

  public async execute(payload: CreateUserPort): Promise<UserUseCaseDto> {
    const doesUserExist: boolean = !!(await this.userRepository.countUsers({ id: payload.userId }));
    CoreAssert.isFalse(doesUserExist, Exception.new({ code: StatusCode.ENTITY_ALREADY_EXISTS }));

    const user: User = User.new({
      firstName: payload.firstName,
      lastName: payload.lastName,
      username: payload.lastName,
    });

    await this.userRepository.addUser(user);

    return UserUseCaseDto.newFromUser(user);
  }
}
