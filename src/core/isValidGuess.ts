import { createDigitValidator } from './createDigitValidator.js';
import type { Base } from './types.js';

export function isValidGuess(
  guess: string,
  length: number,
  base: Base,
): boolean {
  const isValidChar = createDigitValidator(base);
  const isValidChars = [...guess].every(isValidChar);
  const isValidLength = guess.length === length;
  const isCharsUniq = new Set(guess.toLowerCase()).size === guess.length;

  return isValidLength && isValidChars && isCharsUniq;
}
