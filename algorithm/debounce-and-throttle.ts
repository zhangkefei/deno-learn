/**
 * 函数防抖：如果重复触发并且间隔小于n秒，则只执行最后一次
 */

let timer: number | null = null

function debounce(ms: number): void {
    if (timer !== null) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        console.log('debounce');
    }, ms)
}

for (let i = 0; i < 100; i++) {
    debounce(1000)
}

/**
 * 函数节流：n秒内只执行一次某函数
 */