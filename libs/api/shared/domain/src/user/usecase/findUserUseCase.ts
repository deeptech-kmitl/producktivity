import { Optional, UseCase } from '../../common';
import { FindUserPort } from '../port';
import { UserUseCaseDto } from '../dto';

export interface FindUserUseCase extends UseCase<FindUserPort, Optional<UserUseCaseDto>> {}
