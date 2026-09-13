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
}
