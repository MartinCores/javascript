//Completa la función removeExtraWhitespace de modo que retorne el texto sin espacios en
//blanco al inicio o final del texto
const name = "        isto ten bastante espazo a cada lado          ";
function removeExtraWhitespace(name) {
  return name.trim();
}
console.log(removeExtraWhitespace(name));
