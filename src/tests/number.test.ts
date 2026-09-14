import { describe, it, expect } from 'vitest';
import z from '../index.js';

describe('NumberValidator', () => {
  it('should validate a valid number', () => {
    const validator = z.number();
    expect(validator.parse(42)).toBe(42);
  });

  it('should return errors for non-number values', () => {
    const validator = z.number();
    
    expect(() => validator.parse('42')).toThrow('Value must be a valid number');
    expect(() => validator.parse(NaN)).toThrow('Value must be a valid number');
  });

  it('should validate min value', () => {
    const validator = z.number().min(10);
    
    // Valid
    expect(validator.parse(10)).toBe(10);
    expect(validator.parse(11)).toBe(11);

    // Invalid
    expect(() => validator.parse(9)).toThrow('Value must be at least 10');
  });

  it('should validate max value', () => {
    const validator = z.number().max(10);
    
    // Valid
    expect(validator.parse(10)).toBe(10);
    expect(validator.parse(9)).toBe(9);

    // Invalid
    expect(() => validator.parse(11)).toThrow('Value must be at most 10');
  });

  it('should validate both min and max', () => {
    const validator = z.number().min(5).max(10);
    
    expect(validator.parse(7)).toBe(7);

    expect(() => validator.parse(4)).toThrow('Value must be at least 5');
    expect(() => validator.parse(11)).toThrow('Value must be at most 10');
  });

  it('should validate integers', () => {
    const validator = z.number().integer();
    
    expect(validator.parse(42)).toBe(42);
    expect(() => validator.parse(42.5)).toThrow('Value must be an integer');
  });

  it('should validate floats', () => {
    const validator = z.number().float();
    
    expect(validator.parse(42.5)).toBe(42.5);
    expect(() => validator.parse(42)).toThrow('Value must be a float');
  });
});
