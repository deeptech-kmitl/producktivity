import { validate, ValidationError } from 'class-validator';

export class Validator {
  public static async validate<Target extends object>(target: Target, context?: string): Promise<ValidationDetails | undefined> {
    let details: ValidationDetails | undefined = undefined;
    const errors: ValidationError[] = await validate(target);

    if (errors.length > 0) {
      details = {
        context: context || target.constructor.name,
        errors: [],
      };

      for (const error of errors) {
        details.errors.push({
          property: error.property,
          message: error.constraints ? Object.values(error.constraints) : [],
        });
      }
    }

    return details;
  }
}

export type ValidationDetails = {
  context: string;
  errors: ValidationErrors[];
};

export type ValidationErrors = {
  property: string;
  message: string[];
};
