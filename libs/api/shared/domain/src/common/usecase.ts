export interface UseCase<Port, T> {
  execute(port?: Port): Promise<T>;
}

export interface TransactionalUseCase<Port, T> extends UseCase<Port, T> {
  onCommit?: (result: T, port: Port) => Promise<void>;
  onRollback?: (error: Error, port: Port) => Promise<void>;
}
