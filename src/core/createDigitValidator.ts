import { BASE_ALPHABETS, type Base } from './types.js';

export function createDigitValidator(base: Base): (char: string) => boolean {
  return (char) =>
    char.length === 1 && BASE_ALPHABETS[base].includes(char.toLowerCase());
}
