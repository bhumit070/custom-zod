import type { StringValidator } from './index.js';

export function stringParser(this: StringValidator, value: unknown) {
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
