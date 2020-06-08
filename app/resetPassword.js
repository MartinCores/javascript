//RESET PASSWORD
const users = [`cgonzalez@hubescuela.com`, `test@test.com`];
const stringStart = `http://www.resetpassword.com/`;

//Recibe unha string, busca un elemento (old) e retorna a cadea substituindo éste por outro novo (neu)
const modifyChain = (chain, alt, neu) => {
  const result = chain.replace(alt, neu);
  return result;
};
//Comproba que o parámetro estea en users, logo aplica a función anterior sobre o email introducido para agregar a url.
const resetPassword = (email) => {
  const result = users.find((value) => value === email);
  if (result === undefined) {
    return false;
  }


  const parcialChain = modifyChain(email, "@", "-");
  return stringStart + modifyChain(parcialChain, ".", "-");
};

console.log(resetPassword("cgonzalez@hubescuela.com"));
