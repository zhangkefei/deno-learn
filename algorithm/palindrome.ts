/**
 * 判断回文字符串
 */

function palindrome(str: string): boolean {
    if (str.length < 2) {
        return true
    }

    if (str[0] !== str[str.length - 1]) {
        return false
    }

    return palindrome(str.slice(1, str.length - 1))
}

console.log('abcdef', palindrome('abcdef'));
console.log('abcdefedcba', palindrome('abcdefedcba'));

