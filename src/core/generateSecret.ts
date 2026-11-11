import { BASE_ALPHABETS, type Base } from './types.js';

export function generateSecret(
  length: number,
  base: Base,
  random: () => number = Math.random,
): string {
  const alphabetArray = [...BASE_ALPHABETS[base]];
  let secret = '';

  if (length > alphabetArray.length) {
    throw new Error(
      'Длина secret не может быть больше длины алфавита для выбранной base',
    );
  }

  for (let i = alphabetArray.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [alphabetArray[i], alphabetArray[j]] = [
      alphabetArray[j]!,
      alphabetArray[i]!,
    ];
  }

  secret += alphabetArray.slice(0, length).join('');
  return secret;
}
