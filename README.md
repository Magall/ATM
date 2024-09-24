Credit: enviroment setup: https://github.com/ardunster/ts-kata/blob/main/README.md

## How to run ?

- npm run test
- npm run test:coverage

## Solution explained

In this challenge, we need to control two things: first, calculate how to break a number into a subset of given values, where the amount to withdraw must be a sum of our bills and coins.

The second thing we need to control, in iteration two, is the quantity of bills and coins themselves. If the ATM runs out of larger bills, it should use a combination of smaller ones to provide the money to the customer.

To calculate which bills and coins to give to the customer (iteration one), I am iterating over the MONEY array, which contains the values in descending order, and subtracting the bill or coin value from the amount to withdraw. When the amount to withdraw becomes smaller than the current bill or coin, it moves to the next one. Every time a subtraction is possible, I add the current bill or coin to the cash array. The cash array represents all the bills and coins we will give to the customer.

To manage the quantity of bills and coins inside the ATM (iteration two), I am using a Map (called bank) with the set of bills and coins specified in the exercise. Every time something is added to the cash array, it is deducted from its position in the Map. Now, we need to check two things to see if we can give this bill to the customer: first, the logic created in iteration one (if the value is greater than or equal to the bill), and second, if we have that bill available in the bank Map.

To build the receipt, we use the MONEY constant again. We iterate over each position and check the cash array for how many occurrences of each bill or coin there are. Then, we verify its type (bill or coin) and print it on the receipt.
