import { BTC } from " https://deno.land/x/bitcoin@0.0.1/mod.ts"

let test = new BTC();
console.log(await test.getPrice());