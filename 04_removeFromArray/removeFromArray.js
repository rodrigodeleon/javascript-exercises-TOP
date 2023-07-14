const removeFromArray = function () {
  let myArray = arguments[0];
  for (let index = myArray.length - 1; index >= 0; index--) {
    for (let i = arguments.length - 1; i > 0; i--) {
      let myNum = arguments[i];
      if (myArray[index] === myNum) {
        myArray.splice(index, 1);
      }
    }
  }
  console.log(myArray);

  return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
