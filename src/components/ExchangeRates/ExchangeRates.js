import { getExchangeRates } from "../../data/data";

function ExchangeRates({from, to}) {

  const rate = getExchangeRates(`${from + to}`);

  // for (let i = 10; i < 35; i+=5) {
  //   console.log(i);
    
  // }
  // let b = 10;
  // if(b % 3 == 0) {
  //   let i = 10;
    
  // }
  // console.log(i)

  

  return ( 
    <div>
      {from}/{to} = {rate};
    </div>
  );
}

export default ExchangeRates;