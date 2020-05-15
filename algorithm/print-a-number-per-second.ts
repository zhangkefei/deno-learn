/**
 * 每秒输出一个数字
 */

function sleep(ms: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

for (let i = 0; i < 10; i++) {
    const num = i + 1
    console.log(num);
    await sleep(1000)
}