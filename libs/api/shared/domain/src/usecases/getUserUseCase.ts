import { UseCase } from '../common/usecase';
import { GetUserPort } from '../port/getUserPort';
import { UserUseCaseDto } from './dto/userUseCaseDto';

export interface GetUserUseCase extends UseCase<GetUserPort, UserUseCaseDto> {}
