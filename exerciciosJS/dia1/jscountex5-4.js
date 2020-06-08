//funcion que reciba tres parámetros y en función del 3er parámetro (que será + - * o /) debe realizar la operacion
//correspondiente y devolver un resultado
calculator(1, "-", 3);

function calculator(num1, operator, num2) {
  console.log(num1);
  sum(num1, num2);
  substract(num1, num2);
  multiply(num1, num2);
  divide(num1, num2);

  if (operator === "+") {
    sum(num1, num2);
  } else if (operator === "-") {
    substract(num1, num2);
  } else if (operator === "*") {
    multiply(num1, num2);
  } else if (operator === "/") {
    divide(num1, num2);
  }
}

function sum(param1, param2) {
  console.log("suma:");
  console.log(param1 + param2);
}

function substract(param1, param2) {
  console.log("resta:");
  console.log(param1 - param2);
}

function multiply(param1, param2) {
  console.log("multiplicación:");
  console.log(param1 * param2);
}

function divide(param2, param1) {
  console.log("división:");
  console.log(param1 / param2);
}
