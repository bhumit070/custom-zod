import { describe, it, expect } from 'vitest';
import z from '../index.js';

describe('StringValidator', () => {
  it('should validate a valid string', () => {
    const validator = z.string();
    expect(validator.parse('hello')).toBe('hello');
  });

  it('should return errors for non-string values', () => {
    const validator = z.string();
    expect(() => validator.parse(123)).toThrow('Value must be a string');
  });

  it('should validate min length', () => {
    const validator = z.string().min(3);
    
    // Valid
    expect(validator.parse('abc')).toBe('abc');

    // Invalid
    expect(() => validator.parse('ab')).toThrow('Value must be at least 3 characters long');
  });

  it('should validate max length', () => {
    const validator = z.string().max(5);
    
    // Valid
    expect(validator.parse('abcde')).toBe('abcde');

    // Invalid
    expect(() => validator.parse('abcdef')).toThrow('Value must be at most 5 characters long');
  });

  it('should validate both min and max length', () => {
    const validator = z.string().min(3).max(5);
    
    // Valid
    expect(validator.parse('abcd')).toBe('abcd');

    // Invalid (too short)
    expect(() => validator.parse('ab')).toThrow('Value must be at least 3 characters long');

    // Invalid (too long)
    expect(() => validator.parse('abcdef')).toThrow('Value must be at most 5 characters long');
  });
});
