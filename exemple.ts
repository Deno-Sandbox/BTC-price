import { Snow_BTCPRICE } from " https://deno.land/x/bitcoin@beta/mod.ts"

let test = new Snow_BTCPRICE();
console.log(await test.getPrice());