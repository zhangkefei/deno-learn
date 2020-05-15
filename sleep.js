let timer = null
let myResolve = null

function sleep(timeout) {
    return new Promise((resolve, reject) => {
        myResolve = resolve
        timer = setTimeout(() => {
            console.log('resolve');
            resolve()
        }, timeout)
    }).catch(err => {
        console.log(err);

    })
}

console.log('start');
sleep(3000);
console.log('end');
myResolve()
global.clearTimeout(timer)