import { getPadding } from './padding.props';
import { getSize } from './size.props';

export interface Props {}

export class PropsBuilder {
  private props: Props
  private functions: ((props: Props) => string[])[];

  constructor(props: Props) {
    this.props = props;
    this.functions = [];
  }

  withSize(): PropsBuilder {
    this.functions.push(getSize);

    return this;
  }

  withPadding(): PropsBuilder {
    this.functions.push(getPadding);

    return this;
  }

  build(): string[] {
    return this.functions.map((fn) => fn(this.props)).flat();
  }
}
