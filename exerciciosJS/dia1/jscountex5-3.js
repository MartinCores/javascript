//funcion que reciba tres parámetros y en función del 3er parámetro (que será + - * o /) debe realizar la operacion
//correspondiente y devolver un resultado

function calculaSuma(num1, num2) {
  let result = 0;
  result = num1 + num2;
  console.log(result);
}

function calculaResta(num1, num2) {
  let result = 0;
  result = num1 - num2;
  console.log(result);
}

function calculaMulti(num1, num2) {
  let result = 0;
  result = num1 * num2;
  console.log(result);
}

function calculaDivi(num1, num2) {
  let result = 0;
  result = num1 / num2;
  console.log(result);
}

calculaSuma(6, 3);
calculaResta(6, 3);
calculaMulti(6, 3);
calculaDivi(6, 3);
