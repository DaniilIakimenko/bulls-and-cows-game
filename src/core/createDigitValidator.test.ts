import { describe, it, expect } from 'vitest';
import { createDigitValidator } from './createDigitValidator.js';

describe('createDigitValidator', () => {
  it('0 допустимо для bin', () => {
    expect(createDigitValidator('bin')('0')).toBe(true);
  });

  it('1 допустимо для bin', () => {
    expect(createDigitValidator('bin')('1')).toBe(true);
  });

  it('2 недопустимо для bin', () => {
    expect(createDigitValidator('bin')('2')).toBe(false);
  });

  it('5 допустимо для dec', () => {
    expect(createDigitValidator('dec')('5')).toBe(true);
  });

  it('a недопустимо для dec', () => {
    expect(createDigitValidator('dec')('a')).toBe(false);
  });

  it('a допустимо для hex', () => {
    expect(createDigitValidator('hex')('a')).toBe(true);
  });

  it('A допустимо для hex', () => {
    expect(createDigitValidator('hex')('A')).toBe(true);
  });

  it('f допустимо для hex', () => {
    expect(createDigitValidator('hex')('f')).toBe(true);
  });

  it('g недопустимо для hex', () => {
    expect(createDigitValidator('hex')('g')).toBe(false);
  });

  it('7 допустимо для oct', () => {
    expect(createDigitValidator('oct')('7')).toBe(true);
  });

  it('Пустая строка недопустима', () => {
    expect(createDigitValidator('dec')('')).toBe(false);
  });

  it('Строка из нескольких символов недопустима', () => {
    expect(createDigitValidator('bin')('01')).toBe(false);
  });

  it('Возвращает функцию', () => {
    expect(typeof createDigitValidator('bin') === 'function').toBe(true);
  });
});
