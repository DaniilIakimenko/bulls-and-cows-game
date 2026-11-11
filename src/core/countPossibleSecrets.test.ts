import { describe, expect, it } from 'vitest';
import { countPossibleSecrets } from './countPossibleSecrets.js';

describe('countPossibleSecrets', () => {
  it('Длина 0', () => {
    expect(countPossibleSecrets(0, 'dec')).toBe(1);
  });

  it('При длине 1 для dec 10 вариантов', () => {
    expect(countPossibleSecrets(1, 'dec')).toBe(10);
  });

  it('При длине 2 для dec 90 вариантов', () => {
    expect(countPossibleSecrets(2, 'dec')).toBe(90);
  });

  it('При длине 2 для bin 2 варианта', () => {
    expect(countPossibleSecrets(2, 'bin')).toBe(2);
  });

  it('При длине 3 для bin 0 вариантов', () => {
    expect(countPossibleSecrets(0, 'bin')).toBe(0);
  });

  it('При длине 2 для hex 240 вариантов', () => {
    expect(countPossibleSecrets(2, 'hex')).toBe(240);
  });

  it('При длине 4 для dec 5040 вариантов', () => {
    expect(countPossibleSecrets(4, 'dec')).toBe(5040);
  });

  it('При длине 6 для hex 5765760 вариантов', () => {
    expect(countPossibleSecrets(6, 'hex')).toBe(5765760);
  });

  it('Повторный вызов дает тот же результат', () => {
    expect(countPossibleSecrets(2, 'hex')).toBe(countPossibleSecrets(2, 'hex'));
  });

  it('При разных base разные результаты', () => {
    expect(countPossibleSecrets(6, 'hex')).not.toBe(
      countPossibleSecrets(6, 'dec'),
    );
  });
});
