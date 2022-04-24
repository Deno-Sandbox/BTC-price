import { BTC } from "./mod.ts"
let test 


//test 1
test = new BTC();
console.log(await test.getPrice());

//test 2
test = new BTC("USD");
console.log(await test.getPrice());

//test 3
test = new BTC("USD");
test.setCurreny("EUR");
console.log(await test.getPrice());


//test 4
test.satoshi();