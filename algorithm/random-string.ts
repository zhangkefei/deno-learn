/**
 * 生成指定长度随机字符串
 */

function randomString(n: number) {
    let result = ''
    let str = 'abcdefghijklmnopqrstuvwxyz0123456789';
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            const index = Math.round(Math.random() * str.length)
            result += str.charAt(index)
        }
    }
    return result
}

console.log(randomString(10));
