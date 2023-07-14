const repeatString = function (word, iterationNumb) {
  let res = "";
  if (iterationNumb < 0) {
    return "ERROR";
  } else {
    for (let index = 0; index < iterationNumb; index++) {
      res += word;
    }
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;
