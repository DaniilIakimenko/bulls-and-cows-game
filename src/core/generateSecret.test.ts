import { describe, it, expect } from 'vitest';
import { generateSecret } from './generateSecret.js';
import { BASE_ALPHABETS } from './types.js';

describe('generateSecret', () => {
  it('длина строки 2 для dec', () => {
    const result = generateSecret(2, 'dec', () => 0.5);
    expect(result).toHaveLength(2);
  });

  it('длина строки 4 для dec', () => {
    const result = generateSecret(4, 'dec', () => 0.5);
    expect(result).toHaveLength(4);
  });

  it('длина строки 6 для dec', () => {
    const result = generateSecret(6, 'dec', () => 0.5);
    expect(result).toHaveLength(6);
  });

  it('длина строки 6 для hex', () => {
    const result = generateSecret(6, 'hex', () => 0.5);
    expect(result).toHaveLength(6);
  });

  it('все символы уникальны', () => {
    const result = generateSecret(6, 'hex', () => 0.5);
    expect(new Set(result).size).toBe(6);
  });

  it('допустимые символы bin', () => {
    const result = generateSecret(2, 'bin', () => 0.5);
    expect([...result].every((ch) => BASE_ALPHABETS['bin'].includes(ch))).toBe(
      true,
    );
  });

  it('допустимые символы oct', () => {
    const result = generateSecret(4, 'oct', () => 0.5);
    expect([...result].every((ch) => BASE_ALPHABETS['oct'].includes(ch))).toBe(
      true,
    );
  });

  it('допустимые символы dec', () => {
    const result = generateSecret(4, 'dec', () => 0.5);
    expect([...result].every((ch) => BASE_ALPHABETS['dec'].includes(ch))).toBe(
      true,
    );
  });

  it('допустимые символы hex', () => {
    const result = generateSecret(4, 'hex', () => 0.5);
    expect([...result].every((ch) => BASE_ALPHABETS['hex'].includes(ch))).toBe(
      true,
    );
  });

  it('одинаковый результат с одинаковым значением random', () => {
    const result1 = generateSecret(4, 'dec', () => 0.5);
    const result2 = generateSecret(4, 'dec', () => 0.5);
    expect(result1).toBe(result2);
  });

  it('разный результат с разным значением random', () => {
    const result1 = generateSecret(4, 'dec', () => 0);
    const result2 = generateSecret(4, 'dec', () => 0.5);
    expect(result1).not.toBe(result2);
  });

  it('ошибка, если length больше размера алфавита', () => {
    expect(() => generateSecret(3, 'bin', () => 0.5)).toThrow();
  });
});
