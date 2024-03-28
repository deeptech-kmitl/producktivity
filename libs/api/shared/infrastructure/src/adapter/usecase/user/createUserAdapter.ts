import { CreateUserPort, ValidatableAdapter } from '@producktivity/api-domain';
import { Exclude, Expose, plainToClass } from 'class-transformer';
import { IsString } from 'class-validator';

@Exclude()
export class CreateUserAdapter extends ValidatableAdapter implements CreateUserPort {
  @Expose()
  @IsString()
  public firstName: string;

  @Expose()
  @IsString()
  public lastName: string;

  @Expose()
  @IsString()
  public username: string;

  public static async new(payload: CreateUserPort): Promise<CreateUserAdapter> {
    const adapter: CreateUserAdapter = plainToClass(CreateUserAdapter, payload);
    await adapter.validate();

    return adapter;
  }
}
