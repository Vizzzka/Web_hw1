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
