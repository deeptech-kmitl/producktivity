import { FindUserPort, ValidatableAdapter } from '@producktivity/api-domain';
import { Exclude, Expose, plainToClass } from 'class-transformer';
import { IsString } from 'class-validator';

@Exclude()
export class FindUserAdapter extends ValidatableAdapter implements FindUserPort {
  @Expose()
  @IsString()
  public id?: string;

  @Expose()
  @IsString()
  public username?: string;
  
  public static async new(payload: FindUserPort): Promise<FindUserAdapter> {
    const adapter: FindUserAdapter = plainToClass(FindUserAdapter, payload);
    await adapter.validate();
    
    return adapter;
  }
}
