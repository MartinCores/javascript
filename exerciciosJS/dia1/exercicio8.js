//Completa la función concatInitials de modo que retorne la primera inicial seguida de la segunda inicial que pasamos cómo parámetro
const firstName = "All Cops";
const lastName = "Love Donuts";
function concatInitials(firstName, lastName) {
  return firstName[0] + lastName[0];
}

console.log(concatInitials(firstName, lastName));
