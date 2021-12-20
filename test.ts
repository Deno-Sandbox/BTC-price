import { Snow_BTCPRICE } from "./mod.ts"
let test 


//test 1
test = new Snow_BTCPRICE();
console.log(await test.getPrice());

//test 2
test = new Snow_BTCPRICE("USD");
console.log(await test.getPrice());

//test 3
test = new Snow_BTCPRICE("USD");
test.setCurreny("EUR");
console.log(await test.getPrice());
