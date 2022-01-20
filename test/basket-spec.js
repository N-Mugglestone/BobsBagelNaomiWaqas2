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

const checkItemRemoved = () => {
    //Arrange
    let testBasket = new Basket();
    let expected = true

    testBasket.addItems("bread");
    //Setup
    testBasket.removeItems();
    let actual = testBasket.checkBasketEmpty();

    //Report
    let report = assertEquals(actual, expected);
    console.log(`The item was removed from the basket. ${report}`);



}

const checkIsBasketFull = () => {
    //Arrange
    let testBasket = new Basket();
    let expected = true;

    //Setup
    let input = ["Bread", "Milk", "Coke", "Cereal", "Sweets", "Eggs", "Chicken", "Rice", "Pasta", "Roti"];

    for (let i = 0; i < input.length; i++) {
        testBasket.addItems(input[i]);
    }


    let actual = testBasket.isBasketFull();


    //Report
    let report = assertEquals(actual, expected);
    console.log(`The basket has reach its capacity ${report}`);


}

const ifBasketFullDontAdd = () => {
    //Arrange
    let testBasket = new Basket();
    let expected = true;

    //Setup
    let input = ["Bread", "Milk", "Coke", "Cereal", "Sweets", "Eggs", "Chicken", "Rice", "Pasta", "Roti"];

    for (let i = 0; i < 10; i++) {
        testBasket.addItems(input[i]);
    }
    let add = testBasket.addItems("Ice");
    let actual = add instanceof Error;

    //Report
    let result = assertEquals(actual, expected);
    console.log(`No item can be added ${result}`);

}

const ifMaxSalesReachedIncreaseCapacity = () => {
    //Arrange
    let testBasket = new Basket();
    let expected = true;
    //Act
    let input = ['1', '2', '3', '4'];
    for (let i = 0; i < input.length; i++) {
        testBasket.addItems(input[i]);
    }
    let actual = testBasket.isSalesReached();
    //Assert
    let report = assertEquals(actual, expected)

    //Report
    console.log(`Sales reached ${report}`);
}


const createLargerBasketIfSalesReached = () => {

    //Arrange
    let testBasket = new Basket();
    let expected = true;
    //Act
    let input = ['1', '2', '3', '4'];
    for (let i = 0; i < input.length; i++) {
        testBasket.addItems(input[i]);
    }
    let newBasket = testBasket.isSalesReached();
    let actual = newBasket instanceof Basket;

    //Assert
    let result = assertEquals(actual, expected);
    //Report
    console.log(`New basket added ${result}`);

}

const cannotRemoveItemNotInBasket = () => {
    //Arrange 
    let testBasket = new Basket();
    let expect = true;
    //Act
    let removeItems = testBasket.removeItems('Bread')
    let actual = removeItems instanceof Error;
    //Assert
    let result = assertEquals(actual, expect);
    //Report
    console.log(`Cannot add item not in basket ${result}`)
}

allBasketTests = {
    checkBasketEmptyTest,
    checkItemAdded,
    checkItemRemoved,
    checkIsBasketFull,
    ifBasketFullDontAdd,
    ifMaxSalesReachedIncreaseCapacity,
    createLargerBasketIfSalesReached,
    cannotRemoveItemNotInBasket,
};

module.exports = allBasketTests