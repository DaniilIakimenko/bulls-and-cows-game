import { BASE_ALPHABETS } from './types.js';
export function createDigitValidator(base) {
    return (char) => char.length === 1 && BASE_ALPHABETS[base].includes(char.toLowerCase());
}
//# sourceMappingURL=createDigitValidator.js.map