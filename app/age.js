//Generar una función que calcule la suma de la edad total de los usuarios registrados.
const arrayAges = [39, 57, 20, 33];

const totalAge = (array) => {
  const sumAge = array.reduce((prevAge, nextAge) => {
    return prevAge + nextAge;
  });
  return sumAge;
};
console.log(totalAge(arrayAges));
//E FUERA
