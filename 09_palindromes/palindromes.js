const palindromes = function () {
  let argsString = Array.from(arguments).join("").toLowerCase();
  console.log(argsString);
  let argsNOPUNCTUATION = argsString.replace(/[^\p{L}\p{N}]/gu, "");
  console.log(argsNOPUNCTUATION);
  let myArray = argsNOPUNCTUATION.split("");

  let reversedArray = [...myArray].reverse();
  console.log(myArray);
  console.log(reversedArray);
  let res = myArray.toString() == reversedArray.toString() ? true : false;

  return res;

  // const res = arrperletter.sort((a,b) => a > b ? 1 : -1);
  // console.log(res);
};
// palindromes("race car!  ");
// Do not edit below this line
module.exports = palindromes;
