import { getGap } from './gap.props';
import { getGrid } from './grid.props';
import { getMargin } from './margin.props';
import { getPadding } from './padding.props';
import { getBorderRadius } from './rounded.props';
import { getShadow } from './shadow.props';
import { getSize } from './size.props';

export interface Props {}

export class PropsBuilder {
  private props: Props;
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

  withMargin(): PropsBuilder {
    this.functions.push(getMargin);

    return this;
  }

  withBorderRadius(): PropsBuilder {
    this.functions.push(getBorderRadius);

    return this;
  }

  withGrid(): PropsBuilder {
    this.functions.push(getGrid);

    return this;
  }

  withGap(): PropsBuilder {
    this.functions.push(getGap);

    return this;
  }

  withShadow(): PropsBuilder {
    this.functions.push(getShadow);

    return this;
  }

  build(): string[] {
    return this.functions.map((fn) => fn(this.props)).flat();
  }
}
