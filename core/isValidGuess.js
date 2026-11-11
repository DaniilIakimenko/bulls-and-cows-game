import { createDigitValidator } from './createDigitValidator.js';
export function isValidGuess(guess, length, base) {
    const isValidChar = createDigitValidator(base);
    const isValidChars = [...guess].every(isValidChar);
    const isValidLength = guess.length === length;
    const isCharsUniq = new Set(guess.toLowerCase()).size === guess.length;
    return isValidLength && isValidChars && isCharsUniq;
}
//# sourceMappingURL=isValidGuess.js.map