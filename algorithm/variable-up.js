/**
 * 考察变量提升
 */

var a = 10;

function say() {
    console.log(a);
    // var a = 20;
    let a = 20;
    console.log(a);
}

say()