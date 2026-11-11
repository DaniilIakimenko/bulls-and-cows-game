import type { Base } from './types.js';

export function createDigitValidator(base: Base): (char: string) => boolean {
  void base;
  throw new Error('not implemented');
}
