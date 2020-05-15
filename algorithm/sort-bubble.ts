let arr: number[] = []
for (let i = 0; i < 100; i++) {
    const num = Math.floor(Math.random() * 100)
    arr.push(num)
}

console.log(arr);

function bubbleSort(arr: number[]) {
    let i, j;
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                [arr[j], arr[i]] = [arr[i], arr[j]]
            }
        }
    }

    return arr
}
console.log(Date.now());

console.log(bubbleSort(arr));
console.log(Date.now());
