const cc = require("currency-converter-lt");

const convertor = async (payload) => {
  const { from, to, amount } = payload;

const currencyConverter = new cc();  
 const result= await currencyConverter
    .from(from)
    .to(to)
    .amount(+amount)
    .convert()
    return result
    
};

module.exports = {convertor};
