let firstNumber = parseFloat(prompt("Enter your first number: "));
let operator = prompt(
  "Enter an operation to be used from either of (+, -, /, *)"
);
let secondNumber = parseFloat(prompt("Enter your second number: "));

let result = 0;

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  alert("Try Again");
} else if (operator == "+") {
  result = firstNumber + secondNumber;
} else if (operator == "-") {
  result = firstNumber - secondNumber;
} else if (operator == "*") {
  result = firstNumber * secondNumber;
} else if (operator == "/") {
  result = firstNumber / secondNumber;
}

alert(firstNumber + operator + secondNumber + "=" + result);
