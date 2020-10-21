# Day 13 Assignments

**Note** - You will be writing solutions to this exercise in [main.js file](./main.js)

## Exercise 1: Combinations

Create a function that takes a variable number of arguments, each argument representing the number of items in a group, and returns the number of permutations (combinations) of items that you could get by taking one item from each group.

### Examples

```js
combinations(2, 3) ➞ 6

combinations(3, 7, 4) ➞ 84

combinations(2, 3, 4, 5) ➞ 120
```

### Notes

-   Don't overthink this one.
-   Input may include the number zero.

## Exercise 2 - How Many "Prime Numbers" Are There?

Create a function that finds how many prime numbers there are, up to the given integer.

### Examples

```js
primeNumbers(10) ➞ 4
// 2, 3, 5 and 7

primeNumbers(20) ➞ 8
// 2, 3, 5, 7, 11, 13, 17 and 19

primeNumbers(30) ➞ 10
// 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29
```

## Exercise 3 - Count Number of Identical Arrays

Create a function that takes four arrays as arguments and returns a count of the total number of identical arrays.

### Examples

```js
countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0]) ➞ 2

countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0]) ➞ 0

countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0]) ➞ 3
```

### Notes

-   Don't forget to return the result.

## Exercise 4 - A Redundant Function

Write a function redundant that takes in a string str and returns a function that returns str.

### Examples

```js
const f1 = redundant("apple")
f1() ➞ "apple"

const f2 = redundant("pear")
f2() ➞ "pear"

const f3 = redundant("")
f3() ➞ ""
```

### Notes

-   Your function should return a function, not a string.
