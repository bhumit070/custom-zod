import { Validator } from '../../parser.js';

export class StringValidator extends Validator {
  protected minLength: number | undefined = undefined;
  protected maxLength: number | undefined = undefined;

  constructor() {
    super();
  }

  min(length: number) {
    this.minLength = length;
    return this;
  }

  max(length: number) {
    this.maxLength = length;
    return this;
  }

  protected _parse(value: unknown): [boolean, Array<string>] {
    const errors: Array<string> = [];

    if (typeof value !== 'string') {
      errors.push('Value must be a string');
      return [false, errors];
    }

    if (this.minLength !== undefined) {
      if (value.length < this.minLength) {
        errors.push(`Value must be at least ${this.minLength} characters long`);
      }
    }

    if (this.maxLength !== undefined) {
      if (value.length > this.maxLength) {
        errors.push(`Value must be at most ${this.maxLength} characters long`);
      }
    }

    return [errors.length === 0, errors];
  }
}
