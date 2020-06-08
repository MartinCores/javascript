//Completa la función amsterdamIsFirstWord de modo que retorne true si la primera palabra del
//parámetro description es Amsterdam, en caso contrario debe retornar false.
const description = "Amsterdam es la capital de los escuchadores de Bob Marley";
function amsterdamIsFirstWord() {
  return description.startsWith("Amsterdam");
}
console.log(amsterdamIsFirstWord());
