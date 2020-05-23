/**
 * 递归方式实现深拷贝
 * 1.判断当前参数是否为复杂类型
 *   1.如果是复杂类型，递归调用函数
 *   2.如果不是复杂类型，则将直接返回该值
 */

function deepCopy(data) {
    let copyData;
    if (Object.prototype.toString.call(data) === "[object Object]") {
        copyData = {}
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const element = data[key];
                copyData[key] = deepCopy(element)
            }
        }
    } else if (Object.prototype.toString.call(data) === "[object Array]") {
        copyData = []
        data.forEach((item, index) => {
            copyData[index] = deepCopy(item)
        })
    } else {
        copyData = data
    }
    return copyData
}

let a = {
    num: 1,
    str: 'zhkf',
    bool: true,
    arr: [0, 1, 2, 3],
    fun: () => {},
    obj: {
        a: 1
    }
}

let b = deepCopy(a)

console.log(a);

console.log(b);

console.log(a === b);