//agregar valores a un obxecto dende constantes
const color2 = { whatever: "nha" };
const testColor = "f60";
const nameColor = "red test";
color2[nameColor] = testColor;
console.log(color2);
//borrar un valor
delete color2.whatever;
console.log(color2);

//convertir valores dun obxecto en valores normais de constante
const user = {
  name: "carlos",
  age: 41,
  details: {
    title: "teacher",
    number: 5,
    mc: "The Notorious B.I.G",
  },
};

const { name } = user;
console.log(user);
console.log(name);

const { title } = user.details;
console.log(title);

const { mc } = user.details;
console.log(mc);

console.log(user);
