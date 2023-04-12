palindromeFn = (string) => {
    const stringLength = string.length;
    for (let i = 0; i < stringLength; i++) {
        if (string[i] !== string[stringLength - 1 - i]) {
            return 'It is not a palindrome.';
        }
    }
    return 'It is a palindrome.';
}
console.log(palindromeFn('suyus'));