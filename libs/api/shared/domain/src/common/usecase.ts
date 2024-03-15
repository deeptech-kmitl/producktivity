export interface UseCase<UseCasePort, UseCaseResult> {
  execute(port?: UseCasePort): Promise<UseCaseResult>;
}

export interface TransactionalUseCase<UseCasePort, UseCaseResult> extends UseCase<UseCasePort, UseCaseResult> {
  onCommit?: (result: UseCaseResult, port: UseCasePort) => Promise<void>;
  onRollback?: (error: Error, port: UseCasePort) => Promise<void>;
}
