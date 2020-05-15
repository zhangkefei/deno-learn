import { serve } from "https://deno.land/std@v0.30.0/http/server.ts";

async function main() {
    const s = serve({ port: 8000 });
    console.log("http://localhost:8000/");
    for await (const req of s) {
        req.respond({ body: "Hello World\n" });
    }

}

main()