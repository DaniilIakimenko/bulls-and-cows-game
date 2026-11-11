export function evaluateGuess(secret, guess) {
    const secretArr = [...secret.toLowerCase()];
    const guessArr = [...guess.toLowerCase()];
    const common = guessArr.filter((g) => secretArr.includes(g)).length;
    const bulls = guessArr.reduce((acc, currentChar, index) => currentChar === secretArr[index] ? acc + 1 : acc, 0);
    const cows = common - bulls;
    return { bulls, cows };
}
//# sourceMappingURL=evaluateGuess.js.map