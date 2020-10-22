# Day 14 Assignments

**Note** - You will be writing solutions to this exercise in [main.js file](./main.js)

## Exercise 1: Fibonacci String

A Fibonacci string is a precedence of the Fibonacci series. It works with any two characters of the English alphabet (as opposed to the numbers 0 and 1 in the Fibonacci series) as the initial items and concatenates them together as it progresses similarly to the Fibonacci series.

### Examples

```js
fibStr(3, ["j", "h"]) ➞ "j, h, hj"

fibStr(5, ["e", "a"]) ➞ "e, a, ae, aea, aeaae"

fibStr(6, ["n", "k"]) ➞ "n, k, kn, knk, knkkn, knkknknk"
```

### Notes

-   All values for n will be at least 2.

## Exercise 2 - Two Product Problem

Create a function that takes an array `arr` and a number `n` and returns an array of two integers whose product is that of the number `n`.

### Examples

```js
twoProduct([1, 2, -1, 4, 5], 20) ➞ [4, 5]

twoProduct([1, 2, 3, 4, 5], 10) ➞ [2, 5]

twoProduct([100, 12, 4, 1, 2], 15) ➞ undefined
```

### Note:

-   The array can have multiple solutions, so return the first match that you have found.

## Exercise 3 - Persistence

The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

Create two functions that take an integer as an argument and:

-   Return its additive persistence.
-   Return its multiplicative persistence.

### Examples: Additive Persistence

```js
additivePersistence(1679583) ➞ 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

additivePersistence(123456) ➞ 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

additivePersistence(6) ➞ 0
// Because 6 is already a single-digit integer.
```

### Examples: Multiplicative Persistence

```js
multiplicativePersistence(77) ➞ 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

multiplicativePersistence(123456) ➞ 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

multiplicativePersistence(4) ➞ 0
// Because 4 is already a single-digit integer.
```
