const users = [`cgonzalez@hubescuela.com`, `test@test.com`, "user3@terra.com"];

const lastUserMsg = () => {
  return "Pendiente de activar";
};

function list(callback) {
  const end = users[users.length - 1];
  const endIndex = users.indexOf(end);
  const result = users.map((value, index) => {
    if (index === endIndex) {
      return callback(value);
    }
    return value;
  });

  console.log(result);
}

list(lastUserMsg);
