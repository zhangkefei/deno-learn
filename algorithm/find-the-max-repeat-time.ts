//找出数组中重复最多的数
let arr: number[] = []

for (let i = 0; i < 10000; i++) {
    let randNumber = Math.floor(Math.random() * 100)
    arr.push(randNumber)
}

let o = new Map()
for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const key = num.toString()
    if (o.get(key)) {
        o.set(key, o.get(key) + 1)
    } else {
        o.set(key, 1)
    }
}

let sortArr = Array.from(o)
sortArr.sort((a, b) => { return a[1] - b[1] })
console.log(sortArr.slice(-1)[0]);
