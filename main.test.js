const { combinations, countIdenticalArrays, primeNumbers, redundant } = require("./main");

test("Exercise 1 Test Cases", () => {
  expect(combinations(2)).toStrictEqual(2)
  expect(combinations(2, 3)).toStrictEqual(6)
  expect(combinations(3, 5)).toStrictEqual(15)
  expect(combinations(5, 6, 7)).toStrictEqual(210)
  expect(combinations(5, 5, 5, 5)).toStrictEqual(625)
  expect(combinations(3, 6, 9)).toStrictEqual(162)
  expect(combinations(2, 3, 4, 5, 6, 7, 8, 9, 10)).toStrictEqual(3628800)
  expect(combinations(4, 5, 6)).toStrictEqual(120)
  expect(combinations(5, 6, 7, 8)).toStrictEqual(1680)
  expect(combinations(6, 7, 0)).toStrictEqual(42)
});

test("Exercise 2 ", () => {
  expect(primeNumbers(20)).toStrictEqual(8)
  expect(primeNumbers(30)).toStrictEqual(10)
  expect(primeNumbers(100)).toStrictEqual(25)
  expect(primeNumbers(200)).toStrictEqual(46)
  expect(primeNumbers(1000)).toStrictEqual(168)
  expect(primeNumbers(-5)).toStrictEqual(0)
  expect(primeNumbers(66)).toStrictEqual(18)
  expect(primeNumbers(133)).toStrictEqual(32)
  expect(primeNumbers(99)).toStrictEqual(25)
});

test("Exercise 3 Test Cases", () => {
  expect(countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0])).toStrictEqual(2)
  expect(countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0])).toStrictEqual(0)
  expect(countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0])).toStrictEqual(3)
});

test("Exercise 4 Test Cases", () => {
  const f1 = redundant("apple")
  const f2 = redundant("pear")
  const f3 = redundant("")

  expect(f1()).toStrictEqual("apple")
  expect(f2()).toStrictEqual("pear")
  expect(f3()).toStrictEqual("")
});
