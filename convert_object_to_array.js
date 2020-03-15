// 1. **Convert Object to Array**
// Create a function that converts an object into array

function toArr(obj){
  var res = [];
  for (var key of Object.keys(obj)) {
    res.push([String(key), obj[key]]);
  }
   return res;
}

console.log(toArr({ key1: 'value1', key2: 'value2' })); // [["key1", "value1"], ["key2", "value2"]]
console.log(toArr({})); // [] Return an empty array if the object is empty.
