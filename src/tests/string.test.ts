import { describe, it, expect } from 'vitest';
import z from '../index.js';

describe('StringValidator', () => {
  it('should validate a valid string', () => {
    const validator = z.string();
    const [isValid, errors] = validator.parse('hello');
    expect(isValid).toBe(true);
    expect(errors).toEqual([]);
  });

  it('should return errors for non-string values', () => {
    const validator = z.string();
    const [isValid, errors] = validator.parse(123);
    expect(isValid).toBe(false);
    expect(errors).toEqual(['Value must be a string']);
  });

  it('should validate min length', () => {
    const validator = z.string().min(3);

    // Valid
    const [isValid1, errors1] = validator.parse('abc');
    expect(isValid1).toBe(true);
    expect(errors1).toEqual([]);

    // Invalid
    const [isValid2, errors2] = validator.parse('ab');
    expect(isValid2).toBe(false);
    expect(errors2).toEqual(['Value must be at least 3 characters long']);
  });

  it('should validate max length', () => {
    const validator = z.string().max(5);

    // Valid
    const [isValid1, errors1] = validator.parse('abcde');
    expect(isValid1).toBe(true);
    expect(errors1).toEqual([]);

    // Invalid
    const [isValid2, errors2] = validator.parse('abcdef');
    expect(isValid2).toBe(false);
    expect(errors2).toEqual(['Value must be at most 5 characters long']);
  });

  it('should validate both min and max length', () => {
    const validator = z.string().min(3).max(5);

    // Valid
    const [isValid1, errors1] = validator.parse('abcd');
    expect(isValid1).toBe(true);
    expect(errors1).toEqual([]);

    // Invalid (too short)
    const [isValid2, errors2] = validator.parse('ab');
    expect(isValid2).toBe(false);
    expect(errors2).toEqual(['Value must be at least 3 characters long']);

    // Invalid (too long)
    const [isValid3, errors3] = validator.parse('abcdef');
    expect(isValid3).toBe(false);
    expect(errors3).toEqual(['Value must be at most 5 characters long']);
  });
});
