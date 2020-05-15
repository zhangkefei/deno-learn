console.log(Deno.args);

let filename = Deno.args[1]

async function main() {
    console.table(Deno.resources())

    let f = await Deno.open(filename)

    console.log(f);

    console.table(Deno.resources())

    await Deno.copy(Deno.stdout, f)

}

main()