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
