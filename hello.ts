function hello(msg: string): void {
    console.log(msg);

}

function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, ms)
    })
}

async function main() {
    hello('hello')
    // await sleep(5000)
    hello('world')
}

main()