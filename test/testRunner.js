const allBasketTests = require('./basket-spec');


allBasketTests.checkBasketEmptyTest();
allBasketTests.checkItemAdded();
allBasketTests.checkItemRemoved();
allBasketTests.checkIsBasketFull();
allBasketTests.ifBasketFullDontAdd();
allBasketTests.ifMaxSalesReachedIncreaseCapacity();
allBasketTests.createLargerBasketIfSalesReached();
allBasketTests.cannotRemoveItemNotInBasket();
allBasketTests.itemAlreadyInBasket();



