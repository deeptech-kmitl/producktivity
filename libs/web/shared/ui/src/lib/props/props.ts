import { getPadding } from './padding.props';
import { getSize } from './size.props';

export interface DefaultProps {}

export class Props {
  private props: DefaultProps
  private functions: ((props: DefaultProps) => string[])[];

  constructor(props: DefaultProps) {
    this.props = props;
    this.functions = [];
  }

  withSize(): Props {
    this.functions.push(getSize);

    return this;
  }

  withPadding(): Props {
    this.functions.push(getPadding);

    return this;
  }

  build(): string[] {
    return this.functions.map((fn) => fn(this.props)).flat();
  }
}
