import { describe, it, expect } from 'vitest';
import { isValidGuess } from './isValidGuess.js';

describe('isValidGuess', () => {
  it('Валидный dec', () => {
    expect(isValidGuess('1234', 4, 'dec')).toBe(true);
  });

  it('Неверная длина', () => {
    expect(isValidGuess('123', 4, 'dec')).toBe(false);
  });

  it('Слишком длинный', () => {
    expect(isValidGuess('12345', 4, 'dec')).toBe(false);
  });

  it('Недопустимый символ для bin', () => {
    expect(isValidGuess('1020', 4, 'bin')).toBe(false);
  });

  it('Повторяющийся символ', () => {
    expect(isValidGuess('1123', 4, 'dec')).toBe(false);
  });

  it('Пустая строка', () => {
    expect(isValidGuess('', 4, 'dec')).toBe(false);
  });

  it('Валидный hex', () => {
    expect(isValidGuess('abcd', 4, 'hex')).toBe(true);
  });

  it('Верхний регистр hex', () => {
    expect(isValidGuess('ABCD', 4, 'hex')).toBe(true);
  });

  it('Повторяющийся символ для hex', () => {
    expect(isValidGuess('aabc', 4, 'hex')).toBe(false);
  });

  it('Повторяющийся символ с разным регистром в hex', () => {
    expect(isValidGuess('aAbB', 4, 'hex')).toBe(false);
  });

  it('Валидный bin', () => {
    expect(isValidGuess('10', 2, 'bin')).toBe(true);
  });
});
