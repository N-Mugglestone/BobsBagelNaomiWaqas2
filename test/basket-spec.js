const assertEquals = require('./testFramework'); 
const Basket = require(`../src/basketSourceCode`);

const checkBasketEmptyTest = () => {
//setup
let testBasket = new Basket();
let expected = true;
//execute
let actual = testBasket.checkBasketEmpty();
let report = assertEquals(actual, expected);
//report
return console.log(report);
}

const checkItemAdded = () => {
//Arrange
let testBasket = new Basket(); 
let expected = "bread";

//Setup
testBasket.addItems("bread"); 
let actual = testBasket.items[0]

let report = assertEquals(actual, expected);

//Report 
console.log(`The item was added to the basket. ${report}`);



}
module.exports = {checkBasketEmptyTest, checkItemAdded}; 
