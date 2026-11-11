import { BASE_ALPHABETS } from './types.js';
const cache = new Map();
export function countPossibleSecrets(length, base) {
    const size = BASE_ALPHABETS[base].length;
    function compute(length, size) {
        const key = `${length}-${size}`;
        if (cache.has(key)) {
            return cache.get(key);
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
//# sourceMappingURL=countPossibleSecrets.js.map