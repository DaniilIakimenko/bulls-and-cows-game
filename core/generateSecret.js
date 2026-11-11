import { BASE_ALPHABETS } from './types.js';
export function generateSecret(length, base, random = Math.random) {
    const alphabetArray = [...BASE_ALPHABETS[base]];
    let secret = '';
    if (length > alphabetArray.length) {
        throw new Error('Длина secret не может быть больше длины алфавита для выбранной base');
    }
    for (let i = alphabetArray.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [alphabetArray[i], alphabetArray[j]] = [
            alphabetArray[j],
            alphabetArray[i],
        ];
    }
    secret += alphabetArray.slice(0, length).join('');
    return secret;
}
//# sourceMappingURL=generateSecret.js.map