import { UseCase } from '../common/usecase';
import { CreateUserPort } from '../port/createUserPort';
import { UserUseCaseDto } from './dto/userUseCaseDto';

export interface CreateUserUseCase extends UseCase<CreateUserPort, UserUseCaseDto> {}
