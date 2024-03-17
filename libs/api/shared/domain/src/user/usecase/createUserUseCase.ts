import { Optional, UseCase } from '../../common';
import { CreateUserPort } from '../port';
import { UserUseCaseDto } from '../dto';

export interface CreateUserUseCase extends UseCase<CreateUserPort, Optional<UserUseCaseDto>> {}
