//funcion que reciba tres parámetros y en función del 3er parámetro (que será + - * o /) debe realizar la operacion
//correspondiente y devolver un resultado

function calculate(num1, operator, num2) {
  let result = 0;
  switch (operator) {
    case "+":
      result = num1 + num2;
      console.log(result);
      break;
    case "-":
      result = num1 - num2;
      console.log(result);
      break;
    case "/":
      result = num1 / num2;
      console.log(result);
      break;
    case "*":
      result = num1 * num2;
      console.log(result);
      break;
    default:
      console.log("Operador no válido");
      break;
  }
}
calculate(30, "/", 5);
calculate(4, "*", 9);
calculate(12, "+", 7);
calculate(28, "-", 5);
calculate(24, "x", 3);
calculate("*", 10, 5);
