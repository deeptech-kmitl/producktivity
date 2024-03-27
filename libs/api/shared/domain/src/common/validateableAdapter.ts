import { StatusCode } from './statusCode';
import { Exception } from './exception';
import { Optional } from './optional';
import { ValidationDetails, Validator } from './validator';

export class ValidatableAdapter {
  public async validate(): Promise<void> {
    const details: Optional<ValidationDetails> = await Validator.validate(this);

    if (details) throw Exception.new({ code: StatusCode.USE_CASE_PORT_VALIDATION_ERROR, data: details });
  }
}
