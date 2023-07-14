const sumAll = function (numA, numB) {
  if (numA === numB) console.log("numbers are equals");
  else if (numA < 0 || numB < 0) return "ERROR";
  else {
    let min = 0;
    let max = 0;
    let result = 0;
    numA > numB ? ((max = numA), (min = numB)) : ((max = numB), (min = numA));

    console.log(`minimo: ${min} maximo: ${max} `);
    for (i = min; i <= max; i++) {
      result += i;
    }

    return result;
  }
};


// Do not edit below this line
module.exports = sumAll;
