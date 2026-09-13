import { describe, it, expect } from 'vitest';
import z from '../index.js';

describe('NumberValidator', () => {
  it('should validate a valid number', () => {
    const validator = z.number();
    const [isValid, errors] = validator.parse(42);
    expect(isValid).toBe(true);
    expect(errors).toEqual([]);
  });

  it('should return errors for non-number values', () => {
    const validator = z.number();
    
    const [isValid1, errors1] = validator.parse('42');
    expect(isValid1).toBe(false);
    expect(errors1).toEqual(['Value must be a valid number']);

    const [isValid2, errors2] = validator.parse(NaN);
    expect(isValid2).toBe(false);
    expect(errors2).toEqual(['Value must be a valid number']);
  });

  it('should validate min value', () => {
    const validator = z.number().min(10);
    
    // Valid
    const [isValid1, errors1] = validator.parse(10);
    expect(isValid1).toBe(true);
    expect(errors1).toEqual([]);

    const [isValid2, errors2] = validator.parse(11);
    expect(isValid2).toBe(true);
    expect(errors2).toEqual([]);

    // Invalid
    const [isValid3, errors3] = validator.parse(9);
    expect(isValid3).toBe(false);
    expect(errors3).toEqual(['Value must be at least 10']);
  });

  it('should validate max value', () => {
    const validator = z.number().max(10);
    
    // Valid
    const [isValid1, errors1] = validator.parse(10);
    expect(isValid1).toBe(true);
    expect(errors1).toEqual([]);

    const [isValid2, errors2] = validator.parse(9);
    expect(isValid2).toBe(true);
    expect(errors2).toEqual([]);

    // Invalid
    const [isValid3, errors3] = validator.parse(11);
    expect(isValid3).toBe(false);
    expect(errors3).toEqual(['Value must be at most 10']);
  });

  it('should validate both min and max', () => {
    const validator = z.number().min(5).max(10);
    
    const [isValid1, errors1] = validator.parse(7);
    expect(isValid1).toBe(true);
    expect(errors1).toEqual([]);

    const [isValid2, errors2] = validator.parse(4);
    expect(isValid2).toBe(false);
    expect(errors2).toEqual(['Value must be at least 5']);

    const [isValid3, errors3] = validator.parse(11);
    expect(isValid3).toBe(false);
    expect(errors3).toEqual(['Value must be at most 10']);
  });

  it('should validate integers', () => {
    const validator = z.number().integer();
    
    const [isValid1, errors1] = validator.parse(42);
    expect(isValid1).toBe(true);
    expect(errors1).toEqual([]);

    const [isValid2, errors2] = validator.parse(42.5);
    expect(isValid2).toBe(false);
    expect(errors2).toEqual(['Value must be an integer']);
  });

  it('should validate floats', () => {
    const validator = z.number().float();
    
    const [isValid1, errors1] = validator.parse(42.5);
    expect(isValid1).toBe(true);
    expect(errors1).toEqual([]);

    const [isValid2, errors2] = validator.parse(42);
    expect(isValid2).toBe(false);
    expect(errors2).toEqual(['Value must be a float']);
  });
});
