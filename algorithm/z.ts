//输出Z型文字

function printZ(intent: number) {
    console.log(' '.repeat(intent) + 'z');
}

function printRow(n: number) {
    console.log('z'.repeat(n));
}

let rows = 10

for (let i = 0; i < rows; i++) {
    if (i === 0 || i === rows - 1) {
        printRow(rows)
    } else {
        printZ(rows - i - 1)
    }
}