// 1. **Convert Object to Array**
// Create a function that converts an object into array

function toArr(obj){
   return Object.keys(obj).map(function (key) {
        return [String(key), obj[key]];
    });
}

console.log(toArr({ key1: 'value1', key2: 'value2' })); // [["key1", "value1"], ["key2", "value2"]]
console.log(toArr({})); // [] Return an empty array if the object is empty.

// ### 2. **Average Word Length**
//  Create an average word calculator function.
// The function must take in text and return the number of the average word length.
//  **Ignore punctuation when counting the length.**

function avgWordLengthCalc(string) {
  var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  var sum = 0;

  var strArr = string.split('')
    .filter(function(letter) {
      return punctuation.indexOf(letter) === -1;
    })
    .join('').split(' ');

    for (var word of strArr) {
      sum += word.length;
    }

    return  strArr.length ? sum / strArr.length : 0;
}
     console.log(avgWordLengthCalc("q w e r t y.")); // 1.00
     console.log(avgWordLengthCalc("The reduce method executes a reducer function.")); // 5.57
     console.log(avgWordLengthCalc("callback is called, accumulator!")); // 6.75
     console.log(avgWordLengthCalc("")); // 0

// **Notice:**
// You can't use:
// `Array.prototype.reduce()` and `Array.prototype.map()`



// ### 3. **Maximum Possible Total**
// Given an array of 10 numbers, return the **maximum possible total**
// made by summing just **5 of the 10 numbers**.

function maxTotal(arrNum) {
    return arrNum.sort(function(a, b){return a - b})
    .slice(-5).reduce((a, b) => a + b, 0);
}

     console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])); // 43
     console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]));   // 100
     console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));    // 40

// ### 4. **Pentagonal Number calculator**
// The *n*th pentagonal number P*n* is the number of distinct dots
// in a pattern of dots consisting of the outlines of regular pentagons with sides up to n dots,
// when the pentagons are overlaid so that they share one vertex.
// [More on pentagonal number](https://en.wikipedia.org/wiki/Pentagonal_number)
// Given *n,* return the number of distinct dots in a pattern *P*n

function pentagonalNumber(number) {
  return (3 * number * number - number) / 2;
}

    console.log(pentagonalNumber(1)); // 1
    console.log(pentagonalNumber(2)); // 5
    console.log(pentagonalNumber(5)); // 35
    console.log(pentagonalNumber(9)); // 117
