const reverseString = function (myString) {
  let myArray = myString.split("");
  let result = "";
  for (let index = myArray.length -1; index >= 0; index--) {
   result = result.concat(myArray[index])
   console.log(result);

  }
  return result;
};
// Do not edit below this line
module.exports = reverseString;
