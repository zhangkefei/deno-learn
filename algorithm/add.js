/**
 * 实现一个 add 方法，使计算结果能够满足如下预期:
add(1)(2)(3) ()
add(1, 2, 3)(4)()
 */


function add(...params1) {
    let result1 = params1.reduce((t, i) => {
        return t + i
    })
    return function (...params2) {
        if (params2.length) {
            let result2 = params2.reduce((t, i) => {
                return t + i
            })
            return add(result1, result2)
        } else {
            return result1
        }
    }
}

console.log(add(1)(2)(3)());
console.log(add(1, 2, 3)(4)());
console.log(add(1, 2, 3)(4, 5)());