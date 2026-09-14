import { Validator } from '../parser.js';

export class StringValidator extends Validator<string> {
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

  public parse(value: unknown): string {
    const errors: Array<string> = [];

    if (typeof value !== 'string') {
      errors.push('Value must be a string');
      throw new Error(errors.join(','));
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

    if (errors.length) throw new Error(errors.join(','));

    return value;
  }
}
