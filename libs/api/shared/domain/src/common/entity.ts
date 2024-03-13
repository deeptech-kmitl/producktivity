import { Exception } from './exception';
import { Optional } from './optional';
import { StatusCode } from './statusCode';
import { ValidationDetails, Validator } from './validator';

export class Entity<Identifier extends string | number> {
  protected id: Optional<Identifier>;

  public getId(): Identifier {
    if (this.id === undefined) {
      throw Exception.new({
        code: StatusCode.ENTITY_VALIDATION_ERROR,
        message: `${this.constructor.name}: ID is empty.`,
      });
    }

    return this.id;
  }

  public async validate(): Promise<void> {
    const details: ValidationDetails | undefined = await Validator.validate(this);

    if (details) {
      throw Exception.new({
        code: StatusCode.ENTITY_VALIDATION_ERROR,
        data: details,
      });
    }
  }
}
