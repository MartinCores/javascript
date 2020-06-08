//Completa la función getMultilineString de modo que retorne el siguiente texto:
// Los template string permiten interpolación
const firstName = `Los template string`;
const lastName = `
permiten interpolación`;
function getMultilineString() {
  return firstName + lastName;
}
console.log(getMultilineString(`${firstName} ${lastName}`));
