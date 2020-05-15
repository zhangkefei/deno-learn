function wait() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('setTimeout');
            resolve()
        }, 1000)
    })
}

await wait()

console.log('after setTimeout');
