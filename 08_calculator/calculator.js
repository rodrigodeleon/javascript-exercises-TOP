const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function () {
  let res = 0;
  let args = Array.from(arguments);
  args[0].forEach((element) => {
    res += parseInt(element);
  });
  console.log(res);
  return res;
};

const multiply = function () {
  let res = 1;
  let args = Array.from(arguments);
  args.forEach((element) => {
    res *= parseInt(element);
  });
  console.log(res);
  return res;
};
//multiply(2, 4, 3);

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  if (a == 0) return 1;
  else {
    let res = 1;
    for (i = 1; i <= a; i++) 
    {
      res *= i;
      console.log (res);

    }
    return res;
  }
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
