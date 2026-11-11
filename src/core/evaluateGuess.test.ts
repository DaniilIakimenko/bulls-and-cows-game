import { describe, it, expect } from 'vitest';
import { evaluateGuess } from './evaluateGuess.js';

describe('evaluateGuess', () => {
  it('Все bulls', () => {
    const result = evaluateGuess('1234', '1234');
    expect(result).toEqual({ bulls: 4, cows: 0 });
  });

  it('Все cows', () => {
    const result = evaluateGuess('1234', '4321');
    expect(result).toEqual({ bulls: 0, cows: 4 });
  });

  it('Смешанный результат', () => {
    const result = evaluateGuess('1234', '1243');
    expect(result).toEqual({ bulls: 2, cows: 2 });
  });

  it('Частичное совпадение', () => {
    const result = evaluateGuess('1234', '1256');
    expect(result).toEqual({ bulls: 2, cows: 0 });
  });

  it('Нет совпадений', () => {
    const result = evaluateGuess('1234', '5678');
    expect(result).toEqual({ bulls: 0, cows: 0 });
  });

  it('Секрет с нулем', () => {
    const result = evaluateGuess('0123', '0123');
    expect(result).toEqual({ bulls: 4, cows: 0 });
  });

  it('Hex bulls верхний регистр', () => {
    const result = evaluateGuess('abcd', 'ABCD');
    expect(result).toEqual({ bulls: 4, cows: 0 });
  });

  it('Hex bulls смешанный регистр', () => {
    const result = evaluateGuess('abcd', 'aBcD');
    expect(result).toEqual({ bulls: 4, cows: 0 });
  });

  it('Hex cow разный регистр', () => {
    const result = evaluateGuess('abcd', 'badc');
    expect(result).toEqual({ bulls: 0, cows: 4 });
  });

  it('Hex частичное совпадение', () => {
    const result = evaluateGuess('abcd', 'ab12');
    expect(result).toEqual({ bulls: 2, cows: 0 });
  });

  it('Bin', () => {
    const result = evaluateGuess('10', '01');
    expect(result).toEqual({ bulls: 0, cows: 2 });
  });
});
