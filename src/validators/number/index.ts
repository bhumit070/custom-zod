import { Validator } from '../../parser.js';

export class NumberValidator extends Validator {
  protected minValue: number | undefined;
  protected maxValue: number | undefined;
  protected mustBeInteger: boolean = false;
  protected mustBeFloat: boolean = false;

  min(value: number) {
    this.minValue = value;
    return this;
  }

  max(value: number) {
    this.maxValue = value;
    return this;
  }

  integer() {
    this.mustBeInteger = true;
    return this;
  }

  float() {
    this.mustBeFloat = true;
    return this;
  }
}
