import { Validator } from '../parser.js';

export class NumberValidator extends Validator<number> {
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

  public parse(value: unknown): number {
    const errors: Array<string> = [];

    if (typeof value !== 'number' || Number.isNaN(value)) {
      errors.push('Value must be a valid number');
      throw new Error(errors.join(','));
    }

    if (this.minValue !== undefined && value < this.minValue) {
      errors.push(`Value must be at least ${this.minValue}`);
    }

    if (this.maxValue !== undefined && value > this.maxValue) {
      errors.push(`Value must be at most ${this.maxValue}`);
    }

    if (this.mustBeInteger && !Number.isInteger(value)) {
      errors.push('Value must be an integer');
    }

    if (this.mustBeFloat && Number.isInteger(value)) {
      errors.push('Value must be a float');
    }

    if (errors.length) throw new Error(errors.join(','));

    return value;
  }
}
