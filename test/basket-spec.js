const assertEquals = require('./testFramework'); 

const checkBasketEmptyTest = () => {
//setup
let input = 0;
let expected = 0;
//execute
let actual = checkbasket(input);
let report = assertEquals(actual, expected);
//report
return console.log(report);
}

module.exports = checkBasketEmptyTest; 
