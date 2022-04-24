let currencyRequest = "EUR"

export class BTC {

    constructor(currency?:string){
        if(currency){
            currencyRequest = currency;
        }
    }   

    async makeRequest(cur:String) {
        let data = await fetch(`https://api.coinbase.com/v2/prices/spot?currency=${cur}`);
        let json = await data.json();
        return json.data;
    }

    async getPrice(currency?:string){
        if(currency){
            currencyRequest = currency;
        }
        return await this.makeRequest(currencyRequest);
    }

    setCurreny(currency:string){
        currencyRequest = currency;
    }

    async satoshi(){
        console.log(Deno.readTextFileSync('./btc.ascii'))
    }
}