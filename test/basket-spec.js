const assertEquals = require('./testFramework'); 
const Basket = require(`../src/basketSourceCode`);

const checkBasketEmptyTest = () => {
//setup
let testBasket = new Basket();
let expected = 0;
//execute
let actual = testBasket.checkBasketEmpty();
let report = assertEquals(actual, expected);
//report
return console.log(report);
}

module.exports = checkBasketEmptyTest; 
