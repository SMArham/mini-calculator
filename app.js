function calc(num1, opr, num2) {
  if (opr === "+") {
    return num1 + num2;
  } else if (opr === "-") {
    return num1 - num2;
  }

  if (opr === "*") {
    return num1 * num2;
  } else {
    return "Incorrect Operator!";
  }
}

var result = calc(5, "+", 5);
var result1 = calc(1, "*", 6);
var result2 = calc(6, "$", 1);
var result3 = calc(10, "-", 10);
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
