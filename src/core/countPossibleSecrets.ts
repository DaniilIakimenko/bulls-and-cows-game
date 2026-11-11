import { BASE_ALPHABETS, type Base } from './types.js';

const cache = new Map<string, number>();

export function countPossibleSecrets(length: number, base: Base): number {
  const size = BASE_ALPHABETS[base].length;

  function compute(length: number, size: number): number {
    const key = `${length}-${size}`;

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    if (length === 0) {
      cache.set(key, 1);
      return 1;
    }

    if (length > size) {
      cache.set(key, 0);
      return 0;
    }

    const result = size * compute(length - 1, size - 1);
    cache.set(key, result);
    return result;
  }

  return compute(length, size);
}
