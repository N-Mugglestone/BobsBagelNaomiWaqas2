# BobsBagels :bagel: :bagel: :bagel:

### This was one of my first delves into Pair Programming and finding out how helpful and fun it was!

This purpose of this mini project was to make learn how to take a User Story and make a domain model out of it


In this challenge, myself and a another member of DF Academy transformed User Stories into a Domain Model 
and used test-driving to develop a program that satisfied the stories we were given.

We used straight up JavaScript in order to do this as we were still in the early stages (to be exact, less than a month in!)  in the academy and we were making simple and clean code that would also test well.

<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>

---

### These are the specifications and User Stories provided to us for this mini-project ...

### Bob needs you!

He wants you to implement a simple basket feature for him.

### Part 1

As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

As a member of the public,
So that I can change my order
I'd like to remove an item from my basket

---

### Part 2

As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket. 
In the same way, I want to know if I try to add an item with the same ID already in my basket.

---

### Part 3

As a member of the public,
So that I can know how much my bagels are,
I’d like to see the price of each item before I add it to my basket.

As a member of the public,
So that I can prepare to pay
When I go to checkout I'd like to know the total sum of the bagels in my basket

---

###Tests and potential improvement...

This challenge was simple and to the point, as such the tests were very similar.
Using Junit assertEquals we formed very simple pass or fail tests, such as ... 
```
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
```

The code in this project is clean and simple and as such any improvement would make it more complex which would not be needed. However I would change the methodology we went about to get to this end code. I would make a robust DOM model that would be a good reference point to go back to, rather than picking a story and trying to make it work.
