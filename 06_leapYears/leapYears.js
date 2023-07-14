const leapYears = function (pickedYear) {
  result = false;

  if (pickedYear % 4 == 0) result = true;
  if (pickedYear % 100 == 0) {
    result = false;

    if (pickedYear % 400 == 0) result = true;
    else result = false;
  }

  return result;
};

// Do not edit below this line
module.exports = leapYears;
