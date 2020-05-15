let arr: number[] = []
for (let i = 0; i < 100; i++) {
    const num = Math.floor(Math.random() * 100)
    arr.push(num)
}

console.log(arr);

function quickSort(arr: number[], l: number, r: number) {
    if (l < r) {
        let i = l, j = r, x = arr[i];
        while (i < j) {
            while (i < j && arr[j] > x) {
                j--;
            }
            if (i < j) {
                arr[i++] = arr[j]
            }

            while (i < j && arr[i] < x) {
                i++
            }
            if (i < j) {
                arr[j--] = arr[i]
            }
        }
        arr[i] = x
        quickSort(arr, l, i - 1)
        quickSort(arr, i + 1, r)
    }
}

// function quickSort2(arr: number[], l: number, r: number) {
//     if (l < r) {
//         let i = l, j = r, x = arr[i]
//         while (i < j) {
//             while (i < j && arr[j] >= x) {
//                 j--
//             }

//             if (i < j) {
//                 arr[i] = arr[j]
//             }

//             while (i < j && arr[i] <= x) {
//                 i++
//             }

//             if (i < j) {
//                 arr[j] = arr[i]
//             }
//         }
//         arr[i] = x
//         quickSort2(arr, l, i - 1)
//         quickSort2(arr, i + 1, r)
//     }
// }


console.log(Date.now());

quickSort(arr, 0, arr.length - 1)
// quickSort2(arr, 0, arr.length - 1)

console.log(Date.now());
console.log(arr);
