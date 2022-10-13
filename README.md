### BobsBagels



This purpose of this mini project was to make learn how to take a User Story and make a domain model out of it


In this challenge, myself and a another member of DF Academy transformed User Stories into a Domain Model 
and used test-driving to develop a program that satisfied the stories we were given.

We used straight up JavaScript in order to do this as we were still early on in the academy and we were making simple and 
easy to understand code that would be lean code that would also test well. 

<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>

A **User Story** describes one thing a program is expected to do, from the perspective of somebody using that program.
When planning a program, the client's requirements will be decomposed into many User Stories. 
Much of a developer's life is spent translating User Stories into a functional system.
In Object-Oriented Programming, these systems are made up of **Objects** and **Messages**. 
Objects describe the objects within the system, and Messages describe how those objects interact. We call these systems **Domain Models**.

---

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
