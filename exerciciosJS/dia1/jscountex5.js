//funcion que reciba tres parámetros y en función del 3er parámetro (que será + - * o /) debe realizar la operacion
//correspondiente y devolver un resultado

function calculate(num1, operator, num2) {
  let result = 0;
  if (operator === "+") {
    result = num1 + num2;
    console.log(result);
  } else if (operator === "-") {
    result = num1 - num2;
    console.log(result);
  } else if (operator === "*") {
    result = num1 * num2;
    console.log(result);
  } else if (operator === "/") {
    result = num1 / num2;
    console.log(result);
  } else {
    result = console.log("operador erróneo");
  }
}
calculate(7, "+", 4);
calculate(7, "-", 4);
calculate(7, "*", 4);
calculate(7, "/", 4);
calculate(7, "x", 4);
calculate("*", 7, 4);
