import { StatusCodeDescription } from './statusCode';

export class Exception<T> extends Error {
  public readonly code: number;
  public readonly data?: T;

  private constructor({ code, message }: StatusCodeDescription, overrideMessage?: string, data?: T) {
    // Call constructor from native Error
    super();

    // Error properties
    this.name = this.constructor.name;
    this.message = overrideMessage || message;

    // Additional properties
    this.code = code;
    this.data = data;

    Error.captureStackTrace(this, this.constructor);
  }

  public static new<T>({ code, message, data }: ExceptionCreatePayload<T>): Exception<T> {
    return new Exception(code, message, data);
  }
}

export type ExceptionCreatePayload<T> = {
  code: StatusCodeDescription;
  message?: string;
  data?: T;
};
