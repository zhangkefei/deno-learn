/**
 * 反向遍历字符串
 * @param str 
 */

function reverseString(str: string) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        result = str[i] + result
    }

    return result
}

console.log(reverseString('abcdef'));
