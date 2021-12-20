import { Snow_BTCPRICE } from " https://deno.land/x/bitcoin@0.0.1/mod.ts"

let test = new Snow_BTCPRICE();
console.log(await test.getPrice());