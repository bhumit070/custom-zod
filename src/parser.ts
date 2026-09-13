import { StringValidator } from './validators/string/index.js';

export class Validator {
  private value: unknown = undefined;

  parse(value: unknown) {
    this.value = value;
    return this.decideValidatorAndParse();
  }

  protected parseStringValidator(this: StringValidator, value: unknown) {
    const errors = [];

    if (typeof value !== 'string') {
      errors.push('Value must be a string');
      return [false, errors];
    }

    if (this.minLength) {
      if (value.length < this.minLength) {
        errors.push(`Value must be at least ${this.minLength} characters long`);
      }
    }

    if (this.maxLength) {
      if (value.length > this.maxLength) {
        errors.push(`Value must be at most ${this.maxLength} characters long`);
      }
    }

    console.log('StringValidator parsing result:', { value, errors });
    return [!!!errors.length, errors];
  }

  private decideValidatorAndParse() {
    console.log('Deciding validator and parsing value:', this.value);
    if (this instanceof StringValidator) {
      console.log('Using StringValidator for parsing');
      return this.parseStringValidator(this.value);
    }

    throw new Error('Validator type not supported');
  }
}
